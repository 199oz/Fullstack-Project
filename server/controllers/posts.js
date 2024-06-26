const Post = require("../models/posts");
const User = require("../models/user");

const cloudinary = require("cloudinary").v2;
const mongoose = require('mongoose');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const createPost = async (req, res) => {
    // console.log(req.body);
    const { content, image } = req.body;
    if (!content.length) {
        return res.json({
            error: "Content is required."
        })
    }
    try {
        // console.log(req.auth._id)
        const post = new Post({
            content,
            image,
            postedBy: req.auth._id,
        })
        await post.save();

        const postWithUser = await Post.findById(post._id)
            .populate("postedBy", "-password -secret");

        res.json(postWithUser);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const createImage = async (req, res) => {
    // console.log(req.files);
    try {
        if (!req.files || !req.files.image || !req.files.image.path) {
            return res.json({
                error: "Image is required."
            });
        } else {
            const result = await cloudinary.uploader.upload(req.files.image.path);
            // console.log("UPLOADED IMAGE URL =>", result);
            res.json({
                url: result.secure_url,
                public_id: result.public_id,
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

const postsByUser = async (req, res) => {
    try {
        // const posts = await Post.find({ postedBy: req.auth._id })
        const posts = await Post.find()
            .populate("postedBy", "_id name image")
            .sort({ createdAt: -1 })
            .limit(10);
        // console.log(posts)
        res.json(posts);
    }
    catch (err) {
        console.log(err);
    }
}


const userPost = async (req, res) => {
    console.log(req.params)
    try {
        const post = await Post.findById(req.params._id)
            .populate("postedBy", "_id name image")
            .populate("comments.postedBy", "_id name image")
        console.log(post)
        res.json(post);
    }
    catch (err) {
        console.log(err);
    }
}


const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true });
        res.json(post);
    }
    catch (err) {
        console.log(err);
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params._id)
        // Remove the image from cloudinary
        if (post.image && post.image.public_id) {
            let image = await cloudinary.uploader.destroy(post.image.public_id);
        }
        res.json({ ok: true });
    }
    catch (err) {
        console.log(err);
    }
}

const newsFeed = async (req, res) => {
    const user = await User.findById(req.auth._id);
    let following = user.following;
    following.push(req.auth._id);

    // Pagination
    const currentPage = req.params.page || 1;
    const perPage = 3;


    const posts = await Post.find({ postedBy: { $in: following } })
        .skip((currentPage - 1) * perPage)
        .populate("postedBy", "_id name image")
        .populate("comments.postedBy", "_id name image")
        .sort({ createdAt: -1 })
        .limit(perPage)
    res.json(posts)
}

// Like / unlike

const likePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.body._id, {
            $addToSet: { likes: req.auth._id }
        },
            { new: true })
        res.json(post);
    }
    catch (err) {
        console.log(err);
    }
}

const unlikePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.body._id, {
            $pull: { likes: req.auth._id }
        },
            { new: true })
        res.json(post);
    }
    catch (err) {
        console.log(err);
    }
}

const addComment = async (req, res) => {
    try {
        const { postId, comment } = req.body;
        const post = await Post.findByIdAndUpdate(postId, {
            $push: { comments: { text: comment, postedBy: req.auth._id } }
        }, { new: true })
            .populate("postedBy", "_id name image")
            .populate("comments.postedBy", "_id name image");
        res.json(post);
    }
    catch (err) {
        console.log(err);
    }
}

const removeComment = async (req, res) => {
    try {
        const { postId, comment } = req.body;
        const post = await Post.findByIdAndUpdate(postId, {
            $pull: { comments: { _id: comment._id } }
        }, { new: true })

        res.json(post);
    }
    catch (err) {
        console.log(err);
    }
}

const totalPosts = async (req, res) => {
    try {
        const post = await Post.find().estimatedDocumentCount();
        res.json(post);
    }
    catch (err) {
        console.log(err);
    }
}

const posts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("postedBy", "_id name image")
            .populate("comments.postedBy", "_id name image")
            .limit(12);
        res.json(posts);
    }
    catch (err) {
        console.log(err);
    }
}


const getPost = async (req, res) => {
    try {

        if (!mongoose.Types.ObjectId.isValid(req.params._id)) {
            return res.json({
                error: "Could not find the post"
            });
        }

        const post = await Post.findById(req.params._id)
            .populate("postedBy", "_id name image")
            .populate("comments.postedBy", "_id name image");

        res.json(post);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createPost,
    createImage,
    postsByUser,
    userPost,
    updatePost,
    deletePost,
    newsFeed,
    likePost,
    unlikePost,
    addComment,
    removeComment,
    totalPosts,
    posts,
    getPost
}