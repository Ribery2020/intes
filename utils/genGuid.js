module.exports = function () {
    const crypto = require("crypto")
    let md5 = crypto.createHash("md5")

    let time = new Date().getTime() // 使用时间来加密md5 保持guid唯一性
    let md5Sum = md5.update(time.toString());
    let result = md5Sum.digest("hex");
    return result
}