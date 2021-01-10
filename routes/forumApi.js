const { Board } = require( '../models/forumModels')

module.exports = function (app) {

    app.get('/boards', (req, res) => {
        // 'name description' as a second arg to return only 'name' and 'description' fields 
        Board.find({}, (err, docs) => {
            if (!err) {
              res.send(docs);
            } else {
              throw err;
            }
          });
    })

    app.post('/add-board', (req, res) => {
        Board.create(req.body)
    })

    app.post('/add-reply', (req, res) => {
      console.log(req.body)

      const { currentBoardName, threadId, userId, userFirstName, reply } = req.body

      const replyObj = {
        userId, userId,
        userFirstName: userFirstName,
        reply: reply
      }
 
      Board.findOne({ name: currentBoardName}, (err, board) => {
        if (err) {
          console.log(err)
        } else {
          const thread = board.threads.id(threadId);
          thread.replies.push(replyObj);
          board.save(); 
          res.send("comment submitted")
        }
      })
    })

}