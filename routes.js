const express = require("express")
const Post = require("./models/post")
const router = express.Router()

// get all posts
router.get("/posts", async (req, res) => {
   const posts = await Post.find()
   res.send(posts)
})

module.exports = router