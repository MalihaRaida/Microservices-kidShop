const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');


app.use(bodyparser.json());

var mysqlConnection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'productService',
});

mysqlConnection.connect((error)=>{
    if(!error){
        console.log('Succeded');
    }else{
        console.log('Failed');
    }
})

app.listen(3005,()=>console.log('Express server at port 3005'));

//1.c
app.get('/product/list', (req,res) => {
    mysqlConnection.query('SELECT * from product',(error,rows,fields)=>{
       if(!error) {
           console.log(rows);
           res.send(rows);
       }else{
           console.log(error);
       }
    })
})