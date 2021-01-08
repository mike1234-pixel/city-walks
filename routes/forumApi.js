const Board = require( '../models/forumModels')

module.exports = function (app) {

    app.post('/add-board', (req, res) => {
        console.log(req.body)
        Board.create(req.body)
    })

}