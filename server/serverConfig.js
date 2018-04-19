const fs = require('fs');
const http = require('http');
const jwt = require('jsonwebtoken');
module.exports = function (app, upload) {

    // 用户登录接口
    app.post('/dsp-admin/user/login', function (req, res) {
        let loginInfo = {
            code: 0,
            success: 'login failed!',
            token: ''
        }
        let login = req.body;
        let data = JSON.parse(fs.readFileSync('./server/user.json', {
            encode: 'utf8'
        }));
        data.forEach(function (user) {
            if (user.username == login.username && user.password == login.password) {
                loginInfo = {
                    code: 1,
                    success: 'login success',
                    token: jwt.sign(login, 'zwx', {
                        expiresIn: 60 * 60 * 60
                    })
                }
            }
        })
        res.end(JSON.stringify(loginInfo));
    })

    // 账号信息接口
    app.post('/dsp-admin/userInfo', function (req, res) {
        let data = JSON.parse(fs.readFileSync('./server/userInfo.json'));
        if (data.code == 1) {
            res.end(JSON.stringify(data.userInfo));
        }
    })
    // 上传图片接口
    app.post('/originality/upload/image', upload.single('file'), function (req, res) {
        let fileInfo = req.file;
        res.send({
            data: {
                size: fileInfo.size,
                path: fileInfo.path
            }
        })
    })
    // 服务器端监听端口9000
    app.listen(9000, function () {
        console.log('server listen 9000');
    })
}