var mysql = require('mysql2')
const config = require("../config/config.json")
const host = config.db.mysql.host
const user = config.db.mysql.dbname
const password = config.db.mysql.dbpwd
const database = config.db.mysql.db

var conn = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
})

conn.connect()

function exec(sql, parmas) {
  return new Promise((resolve, reject) => {
    conn.query(sql, parmas, (err, result) => {
      if (err) {
        reject(err)
      }
      resolve(result)
    })
  })
}

module.exports = exec