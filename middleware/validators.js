module.exports = function (app) {
    app.use(function (req, res, next) {
        if (Object.keys(req.body).length != 0) {
            for (let item in req.body) {
                let data = req.body[item].trim()
                if (data == "") {
                    res.status(400).json({
                        mess: `${item}的数据为空`
                    })
                    return
                }
            }
        }
        next()
    })
}