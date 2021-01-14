const mongoose = require('mongoose');

    const replySchema = new mongoose.Schema({
      userId: String,
      userFirstName: String,
      reply: String,
      submittedOn: { type: Date, default: new Date().toISOString().replace('T', ' ').substring(0, 19)}
    })

    const threadSchema = new mongoose.Schema({
      userId: String,
      userFirstName: String,
      title: String,
      content: String,
      submittedOn: { type: Date, default: new Date().toISOString().replace('T', ' ').substring(0, 19)},
      replies: [replySchema]
    })

    const boardSchema = new mongoose.Schema({
        name: String,
        description: String,
        threads: [threadSchema], 
      })

        const Reply = mongoose.model(`Reply`, replySchema)

        const Thread = mongoose.model(`Thread`, threadSchema)
        
        const Board = mongoose.model(`Board`, boardSchema)

        module.exports = {
          Board: Board,
          Thread: Thread,
          Reply: Reply
        }


