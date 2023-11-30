const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var bcrypt = require('bcryptjs');
const app = express()
const knex = require('knex')
require('dotenv').config()

const signin = require('./controllers/signin')
const register = require('./controllers/register')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: "'smart-brain'",
    },
});

app.use(bodyParser.json())
app.use(cors())


app.get("/", (req, res) => {res.send("Home")})
app.get("/profile/:id", (req,res) => profile.handleProfileGet(req,res, db ))

app.post("/signin", (req,res) => signin.handleSignin(req,res, db, bcrypt ))
app.post("/register", (req,res) => register.handleRegister(req , res, db, bcrypt))
app.post("/image",(req,res) => image.handleImage(req,res,db))
app.post("/imageurl",(req,res) => image.handleApiCall(req,res))

app.listen(process.env.PORT, () => {
    console.log(`App is Running on ${process.env.PORT}`)
})