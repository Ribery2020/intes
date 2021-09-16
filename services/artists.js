const exec = require('../models/mysql')
const tableName = "artists"

//添加数据
const add = async (data) => {
    try {
        const sql = `insert into ${tableName}(name,songs) values(?,?)`
        const params = [data.name,
        JSON.stringify(data.songs)]
        const insert = await exec(sql, params)
        return {
            id: insert.insertId
        }
    } catch (error) {
        console.log(error);
    }
}

//查询
const query = async () => {
    try {
        const sql = `select * from ${tableName}`
        const data = await exec(sql)
        return data
    } catch (error) {
        console.log(error);
    }
}

//查询 by name
const queryName = async (name) => {
    try {
        const sql = `select * from ${tableName} where name='${name}'`
        const data = await exec(sql)
        return data
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    add, query, queryName
}
