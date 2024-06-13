var { expressjwt: jwt } = require("express-jwt");
var Post = require("../models/posts");


const requireSignin = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});


const canEditDeletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params._id);
        // validate
        if (req.auth._id != post.postedBy) {
            return res.status(400).send("Unauthorized");
        }
        else {
            next();
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { requireSignin, canEditDeletePost }