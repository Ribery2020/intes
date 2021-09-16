const express = require("express")
const router = express.Router()
// const {} = require("../controllers/")
const { artistsList, postArtists } = require("../controllers/artists")

router.get("/", artistsList)
router.post("/", postArtists)

module.exports = router