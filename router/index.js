import indexRouter from './indexRouter.js';

const createRouter = app => {

    app.use('/', indexRouter)

}

export default createRouter
