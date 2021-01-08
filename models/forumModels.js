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


        mongoose.model(`Reply`, replySchema)

        mongoose.model(`Thread`, threadSchema)

        module.exports = mongoose.model(`Board`, boardSchema)


