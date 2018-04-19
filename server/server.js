const express = require('express');
const bodyParser = require('body-parser');
const serverConfig = require('./serverConfig');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../static/uploads')
    },
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})

let upload = multer({
    storage: storage
})

// 实例App
const app = express();

// 挂载bodyParser
app.use(bodyParser.json());

// 设置跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next();
})

// 服务挂载
serverConfig(app, upload);