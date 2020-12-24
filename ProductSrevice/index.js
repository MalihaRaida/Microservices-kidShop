const mysql= require('mysql');

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