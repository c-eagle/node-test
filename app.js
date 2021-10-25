import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import createRouter from './router/index.js';

const __dirname = fileURLToPath(import.meta.url)

const app = express()

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'html')
app.engine('.html', (await import('ejs')).__express)

app.use(express.static(path.join(__dirname, '../public')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 创建路由
createRouter(app)

app.listen(4000, () => {
    console.log('服务启动成功：http://127.0.0.1:4000')
})
