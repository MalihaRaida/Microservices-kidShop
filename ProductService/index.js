const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "productService",
});

mysqlConnection.connect((error) => {
  if (!error) {
    console.log("Succeded");
  } else {
    console.log("Failed");
  }
});

app.listen(3005, () => console.log("Express server at port 3005"));

//Get all product
app.get("/product/list", (request,response) => {
  mysqlConnection.query("SELECT * from product", (error, rows, field) => {
    if (!error) {
      //console.log(rows);
      response.send(rows);
    } else {
      console.log(error);
    }
  });
});

function e1() {
    var u='',i=0;
    while(i++<36) {
        var c='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i-1],r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);
        u+=(c=='-'||c=='4')?c:v.toString(16)
    }
    return u;
}

console.log(e1())

//De a product
app.delete("/product/remove/:id", (request,response) => {
  mysqlConnection.query("DELETE from product where id=?",[request.params.id], (error, rows, field) => {
    if (!error) {
      //console.log(rows);
      response.send("Deleted Successfully");
    } else {
      console.log(error);
    }
  });
});