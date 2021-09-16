const express = require("express")
const router = express.Router()
// const {} = require("../controllers/")
const { songsList, getSong, updateSong, postSong, getArtist } = require("../controllers/songs")

router.get("/", songsList)
router.get("/artists", getArtist) // 需要放在Parmas上面
router.get("/:id", getSong)
router.put("/:id", updateSong)
router.post("/", postSong)

module.exports = router