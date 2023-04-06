const express =require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');


const db = knex({
    client: 'pg',
    connection:{
        host: '127.0.0.1',
        user: 'postgres',
        password: 'T20210156',
        database: 'loginform'
    }
})


const app = express();

let intialPath =path.join(__dirname,"Website");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get('/',(req,res) =>{
    res.sendFile(path.join(intialPath,"../html/main.html"));
})

app.get('/login',(req,res) =>{
    res.sendFile(path.join(intialPath,"../html/login.html"));
})

app.get('/registerPage',(req,res) =>{
    res.sendFile(path.join(intialPath,"../html/registerPage.html"));
})

app.post('/register-user',(req,res) => {
    const { name, email, password } = req.body;

    if(!name.length || !email.length || !password.length){

    }else{
        db("users").insert({
            name: name,
            email: email,
            password: password
        })
        .returning(["name", "email"])
        .then(data => {
            res.json(data[0])
        })
        .catch(err => {
            if(err.detail.includes('already exists')){
                res.json('email already exists');
            }
        })
    }
})



app.listen(3000,(req, res) => {
    console.log('listening on port 3000......')
})