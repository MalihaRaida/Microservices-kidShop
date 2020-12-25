const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "productService",
  multipleStatements: true
});

mysqlConnection.connect((error) => {
  if (!error) {
    console.log("Succeded");
  } else {
    console.log(error);
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

//Delete a product
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

//post
app.post('/product/add', (req, res) => {
  let productinput = req.body;
  var guid = e1();
  var sql = "SET @name = ?;SET @categoryId = ?;SET @guid=?;\
  CALL productAdd(@guid, @name, @categoryId, @output);\
  select @output";
  mysqlConnection.query(sql, [productinput.name,  productinput.categoryId, guid], (error, rows, fields) => {
      //console.log(rows[4][0]['@output'])
      let status=rows[4][0]['@output']
      if (status=='YES'){
          res.status(400).send("Duplicate product name")
      }
      else{
          if (!error) {
              //console.log(rows);
              res.status(201).send("Added Successfully");
          }
          else
              res.status(500).send(error);
          }
  })
});
        
app.post('/product/add', (req, res) => {
  let productinput = req.body;
  var guid = e1();
  var sql = "SET @name = ?;SET @categoryId = ?;SET @guid=?;\
  CALL productAdd(@guid, @name, @categoryId, @output);\
  select @output";
  mysqlConnection.query(sql, [productinput.name,  productinput.categoryId, guid], (error, rows, fields) => {
      //console.log(rows[4][0]['@output'])
      let status=rows[4][0]['@output']
      if (status=='YES'){
          res.status(400).send("Duplicate product name")
      }
      else{
          if (!error) {
              //console.log(rows);
              res.status(201).send("Added Successfully");
          }
          else
              res.status(500).send(error);
          }
  })
});