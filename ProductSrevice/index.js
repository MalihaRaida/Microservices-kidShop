const mysql= require('mysql');

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