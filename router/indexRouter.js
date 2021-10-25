import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import sendEmail from "../common/sendEmail.js";

const indexRouter = express()
const upload = multer({
    dest: path.join(process.cwd(), '/public/upload')
})

indexRouter.get('/', ((req, res) => {
    res.render('index')
}))

indexRouter.post('/', upload.single('filename'), ((req, res) => {
    console.log(req.file);
    fs.readFile(req.file.path, (err, data) => {
        if (err) {
            res.send('图片上传失败')
        }
        fs.writeFile(path.join(process.cwd(), '/public/upload', req.file.originalname), data, err => {
            if (err) {
                res.send('文件写入失败')
            }
            fs.unlinkSync(req.file.path)
            res.json({
                code: 200,
                result: `/upload/${req.file.originalname}`,
                message: '图片上传成功'
            })
        })
    })
}))

indexRouter.post('/reg', (req, res) => {
    const {name, email, password} = req.body
    sendEmail(email, '注册成功通知', `恭喜注册成功：<br/> 用户名：${name} <br/> 密码： <span style="color: red">${password}</span>`)
    res.json({
        code: 200,
        message: '注册成功'
    })
})


export default indexRouter
