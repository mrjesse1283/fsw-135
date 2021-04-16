const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

// Middleware (for every request) //
app.use(express.json()) 
app.use(morgan('dev')) 

//connection to DB
mongoose.connect('mongodb://localhost:27017/inventorydb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, 
  useFindAndModify: false
},
() => console.log("connected to DB")
)

//get
app.get("/", (req, res )=> {
    res.status(200).send("whats up")
})

//server listener
app.listen(9000, () => {
  console.log("The server is running on Port 9000")
})