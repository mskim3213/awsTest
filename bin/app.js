/**
 * Created by mskim on 2017. 1. 2..
 */
"use strict";
let express = require('express');
let app = express();

app.get('/',(req,res)=>{
  res.send('hello world');
});

app.listen(3001,()=>{
  console.log('app listening on port 3001');
});
