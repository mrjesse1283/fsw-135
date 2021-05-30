const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

// Middleware (for every request) //
app.use(express.json())
app.use(morgan('dev'))

//connection to DB
mongoose.connect('mongodb://localhost:27017/Inventory',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("connected to DB")
)

//test to see if mongo is connected
mongoose.connection.on('connected', () => {
  console.log('mongo is connected')
})

//authrouter
app.use('/auth', require('./routes/authRouter.js'))

//api ENV file
app.use('/api', expressJwt({
  secret: process.env.SECRET,
  algorithms: ["sha1", "RS256", "HS256"]
}))

//Routes for my Schemas
app.use("/api/user", require("./routes/userRouter"))
app.use("/api/issue", require("./routes/issueRouter"))
app.use("/api/comment", require("./routes/commentRouter"))




//error handler 
app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "unauthorized Error") {
    res.status(err.status)
  }
  return res.send({ errMsg: err.message })
})

//server listener
app.listen(9000, () => {
  console.log("The server is running on Port 9000")
})