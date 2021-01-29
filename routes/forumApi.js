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

    app.post('/add-thread', (req, res) => {

      console.log(req.body)

      const { currentBoardName, userId, userFirstName, title, content } = req.body

      const threadObj = {
        userId: userId,
        userFirstName: userFirstName,
        title: title,
        content: content,
      }

      Board.findOne({ name: currentBoardName}, (err, board) => {
        if (err) {
          console.log(err)
        } else {
          board.threads.push(threadObj)
          board.save()
          res.send("thread submitted")
        }

    })

  })

  app.delete('/delete-thread', (req, res) => {
    console.log(req.body)

    const { currentBoardName, threadId } = req.body

    Board.findOne({name: currentBoardName}, (err, board)=> {
      if (err) {
        console.log(err)
      } else {
        board.threads.pull(threadId)
        board.save();
        console.log("thread deleted")
        res.send('thread deleted');
      }
    })

  })


    app.post('/add-reply', (req, res) => {
      console.log(req.body)

      const { currentBoardName, threadId, userId, userFirstName, reply } = req.body

      const replyObj = {
        userId: userId,
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

    app.delete('/delete-reply', (req, res) => {
        const { currentBoardName, threadId, replyId } = req.body

        Board.findOne({name: currentBoardName}, (err, board)=> {
          if (err) {
            console.log(err)
          } else {
            const thread = board.threads.id(threadId);
            const reply = thread.replies.id(replyId);
            if (reply === null) {
              res.send('reply does not exist') 
            } else {
              thread.replies.pull(replyId);
              board.save();
              console.log("reply deleted")
              res.send('reply deleted');
            }
          }

        })
    })

}