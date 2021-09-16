const exec = require('../models/mysql')
const { queryName } = require("../services/artists")
const tableName = "songs"

//添加数据
const add = async (data) => {
    try {
        const guid = require("../utils/genGuid")()
        const sql = `insert into ${tableName}(guid,type,title,songs_time,author) values(?,?,?,?,?)`

        let [first, second] = data.songs_time.split(":")// 转化成秒
        data.songs_time = parseInt(first) * 60 + parseInt(second)

        const params = [guid, data.type, data.title, data.songs_time, data.author]
        await exec(sql, params)
        return {
            id: guid
        }
    } catch (error) {
        console.log(error);
    }
}

//查询
const query = async () => {
    const sql = `select * from ${tableName}`
    const data = await exec(sql)
    return data
}

//查询 by ID
const queryID = async (id) => {
    try {
        const sql = `select * from ${tableName} where guid='${id}'`
        const data = await exec(sql)
        return data
    } catch (error) {
        console.log(error);
    }
}

//查询 by artists query
const queryByQ = async (artist) => {
    const data = await queryName(artist)
    return data
}

//修改
const update = async (data) => {
    const sql = `update ${tableName} set type=?,title=?,songs_time=?,author=? where guid=?`
    const params = [data.type, data.title, data.songs_time, data.author, data.id]
    const data_1 = await exec(sql, params)
    return {
        row: data_1.affectedRows
    }
}

//删除
const del = async (id) => {
    const sql = `delete from ${tableName} where guid=?`
    const params = [id]
    const data = await exec(sql, params)
    return {
        row: data.affectedRows
    }
}

module.exports = {
    add, query, update, del, queryID, queryByQ
}
