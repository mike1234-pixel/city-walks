const Blog = require("../models/blogPostModel")
const dotenv = require('dotenv').config();

module.exports = (app) => {
    app.post('/add-blog-comment', (req, res) => {

        const { currentBlogTitle, comment, userFirstName, userId } = req.body
    
        const commentObj = {
          userId: userId,
          userFirstName: userFirstName,
          comment: comment
        }
    
        Blog.findOne({ title: currentBlogTitle}, (err, board) => {
          if (err) {
            console.log(err)
          } else {
            board.comments.push(commentObj);
            board.save(); 
            res.send("comment submitted")
          }
        })
      })
    
      app.delete('/delete-blog-comment', (req, res) => {
    
        const { currentBlogTitle, commentId } = req.body
      
        Blog.findOne({title: currentBlogTitle}, (err, blogPost)=> {
          if (err) {
            console.log(err)
          } else {
            const comment = blogPost.comments.id(commentId);
            if (comment === null) {
              res.send('comment does not exist') 
            } else {
              blogPost.comments.pull(commentId);
              blogPost.save();
              console.log("comment deleted")
              res.send('comment deleted');
            }
          }
    
        })
    
      })
}