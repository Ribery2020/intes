/* 路由根文件 */
const express = require("express")
const songs = require("./song")
const artists = require("./artists")

/* routes */
module.exports = function (app) {
    app.use('/songs', songs)
    app.use('/artists', artists)
}