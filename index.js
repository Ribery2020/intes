const express = require('express')
const app = express()
const config = require("./config/config.json")
const port = config.system.port // 端口
var cors = require('cors')

// parse http 
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

// 跨域
app.use(cors())

// 中间件
const middlleware = require("./middleware/validators")
middlleware(app)

// 路由表
const routes = require("./routers/route")
routes(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})