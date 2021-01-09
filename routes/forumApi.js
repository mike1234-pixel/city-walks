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

}