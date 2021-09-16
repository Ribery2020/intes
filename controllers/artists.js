const { add, query } = require("../services/artists")

module.exports = {
    // GET
    artistsList: (req, res) => {
        query().then(data => {
            res.json(data)
        })
    },
    // // GET:ID
    // getSong: (req, res) => {
    //     res.json({
    //         "songs": "get ID"
    //     })
    // },
    // // GET:Query
    // getArtist: (req, res) => {
    //     res.json({
    //         "songs": "get Query"
    //     })
    // },
    // // PUT
    // updateSong: (req, res) => {
    //     res.json({
    //         "songs": "put"
    //     })
    // },
    // POST
    postArtists: (req, res) => {
        let data = req.body
        add(data).then(data => {
            res.json(data)
        })
    }
}
