const { add, query, queryID, del, update, queryByQ } = require("../services/songs")
module.exports = {
    // GET
    songsList: (req, res) => {
        query().then(data => {
            res.json(data)
        })
    },
    // GET:ID
    getSong: (req, res) => {
        queryID(req.params.id).then(data => {
            res.json(data)
        })
    },
    // GET:Query
    getArtist: (req, res) => {
        queryByQ(req.query.q).then(data => {
            res.json(data)
        })
    },
    // PUT
    updateSong: (req, res) => {
        res.json({
            "songs": "put"
        })
    },
    // POST
    postSong: (req, res) => {
        add(req.body).then(data => {
            res.json(data)
        })
    }
}
