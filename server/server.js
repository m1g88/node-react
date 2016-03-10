import path from 'path'
import express from 'express'
import exphbs from 'express-handlebars'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import fs from 'fs'
import helmet from 'helmet'
//global.Promise = require('bluebird')

import bodyParser from 'body-parser'
import parseurl from 'parseurl'
//import useragent from 'express-useragent';

// import router from './controller/router'
import reactRouter from '../app/react-router.jsx'

import router from './router'

// if (process.env.develop) {
//
// }
//import config from './config/dev_conf.js'



const app = express()
global._ = require('lodash')
global.sessionStore = new session.MemoryStore()

global.appConfig

  //app.use(favicon(path.join(__dirname, '../../public/images/favicon.ico')));
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '../app/templates'))

// app.use(function(req,res,next){
//   new Promise ((resolve,reject) => {
//     fs.readFile(configPath, (err, content) => {
//       if (err) {
//         console.log('Error loading client secret file: ' + err)
//         reject(err)
//         //return
//       }
//       resolve(JSON.parse(content))
//     })
//   })
//   .then(res => {
//     global.appConfig = res
//     console.log('appConfig' , appConfig)
//   })
//
// })
app.use(helmet())
  /* Body Parser */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cookieParser())
//console.log(app.get('env'))

/**
* Set Session
*/

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  store: global.sessionStore,
  // genid: function(req) {
  //     return genuuid() // use UUIDs for session IDs
  // },
  secret: 'understeer',
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: '/',
    //domain: 'yourdomain.com',
    maxAge: 1000 * 60 * 60 //* 24 // 24 hours
  },
  rolling: true
}))


/* Set static root folder */
app.use(express.static('static'))
// Set static sub folder
app.use('/modules' , express.static(appRoot + '/node_modules'))
app.use('/fonts', express.static('static/fonts'))
app.use('/images', express.static('static/images'))
app.use('/bootstrap', express.static('static/bootstrap'))

//mount api server routes
//let router = require('./router.js')

app.use('/', router)

// use react routes
app.use(reactRouter)

// start server with port 3333
app.listen(3333, () => {
  console.log('listening at http://localhost:3333')
})
