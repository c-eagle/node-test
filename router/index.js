import indexRouter from './indexRouter.js';
import imgsRouter from './imgsRouter.js';

const createRouter = app => {

    app.use('/', indexRouter)

    app.use('/imgs', imgsRouter)

}

export default createRouter
