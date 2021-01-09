const mongoose = require('mongoose');

    const replySchema = new mongoose.Schema({
      userId: String,
      userFirstName: String,
      reply: String,
      repliedOn: { type: Date, default: new Date() }
    })

    const threadSchema = new mongoose.Schema({
      userId: String,
      userFirstName: String,
      content: String,
      threadSubmittedOn: { type: Date, default: new Date() },
      replies: [replySchema]
    })

    const boardSchema = new mongoose.Schema({
        name: String,
        description: String,
        threads: [threadSchema]
      })



        const Reply = mongoose.model(`Reply`, replySchema)

        const Thread = mongoose.model(`Thread`, threadSchema)
        
        const Board = mongoose.model(`Board`, boardSchema)

        module.exports = {
          Board: Board,
          Thread: Thread,
          Reply: Reply
        }


