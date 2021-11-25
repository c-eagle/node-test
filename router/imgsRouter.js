import express from 'express';
import connection from '../db/index.js';

const imgsRouter = express()

imgsRouter.get('/', (req,  res) => {

  connection.query("SELECT * FROM `imgs` LIMIT 0, 1000", (err, data) => {
    res.render('imgs', { data })
  })
  
})

imgsRouter.get('/del', (req, res) => {
  const { id } = req.query
  connection.query("DELETE FROM `imgs` WHERE (`id`='" + id +"')", (err) => {
    if (err) {
      res.json({
        code: 201,
        message: err
      })
    } else {
      res.json({
        code: 200,
        message: '删除成功'
      })
    }
  })
})


export default imgsRouter;