const mysql= require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');
const { request, response } = require('express');

app.use(bodyparser.json)

var mysqlConnection= mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'1234',
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

app.get('/product/list',(request,response)=>{
    mysqlConnection.query('SELECT * from product',(error,rows,field)=>{
       if(!error) {
           response.send(rows);
       }else{
           console.log(error);
       }
    })
})