const express = require('express');
const cors = require('cors')

const app = express();
const session = require("express-session")

const database = require("./models/index.module")

const loginRouter = require("./routes/login.route")
const postRoute = require("./routes/post.route")
const adminRoute = require("./routes/admin.route")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:4200" }))

app.use(session({ // session --> Production add SessionStore
    name: 'schoolbazaar',
    secret: '5ch00lb4z44rby+d3jw&hur1c4n2023',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true when having HTTPS
      httpOnly: true,
      path: "/",
      maxAge: 3600000
    }
}))

app.set("trust proxy", 1)

database.sync();

app.use("/", loginRouter)
app.use("/post/", postRoute)
app.use("/admin/", adminRoute)

const port = 4000

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})