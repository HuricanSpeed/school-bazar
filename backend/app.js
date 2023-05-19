const process = require("process");
const express = require('express');
require("dotenv").config()
const cors = require('cors')
const fs = require('fs')
const morgan = require('morgan')

const app = express();
const session = require("express-session")

// const RedisStore = require("connect-redis").default
// const {createClient}= require("redis")

// let redisClient = createClient({
//   host: 'localhost', // Redis server host
//   port: 6379, // Redis server port
//   // Additional configuration options can be specified here
// })
// redisClient.connect().catch(console.error)

const database = require("./models/index.module")
const errorHandler = require("./middlewares/error.middleware")

const loginRouter = require("./routes/login.route")
const postRoute = require("./routes/post.route")
const adminRoute = require("./routes/admin.route")
const sessionRouter = require("./routes/session.route")
const cdnRoute = require("./routes/cdn.route")

let morganLogStream = fs.createWriteStream('./morgan.log', { flags: 'a' })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:4200" }))

// let redisStore = new RedisStore({
//   client: redisClient,
//   prefix: "schoolbazar:",
// })

app.use(session({ // session --> Production add SessionStore
    // store: redisStore,
    name: 'schoolbazaar',
    secret: '5ch00lb4z44rby+d3jw&hur1c4n2023',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true when having HTTPS
      httpOnly: true,
      path: "/",
      maxAge: 3600000
    }
}))

database.sync();

app.use("/", loginRouter)
app.use("/post/", postRoute)
app.use("/admin/", adminRoute)
app.use("/", sessionRouter)
app.use("/cdn/", cdnRoute)

app.use(errorHandler)

app.use(morgan("combined", { stream: morganLogStream }))

const port = 4000

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})