const { Board } = require( '../models/forumModels')

module.exports = function (app) {

    app.get('/boards', (req, res) => {
        // return only 'name' and 'description' fields 
        Board.find({}, 'name description', (err, docs) => {
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



}