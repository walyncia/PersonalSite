var express = require('express');
var bodyParser = require('body-parser');
var session = require('cookie-session');
var app = express();
var routes = require('./routes/routes');
const path = require("path")


app.use(
    session ({
        maxAge:30*24*60*1000,
        keys: ["This is a secret"]
    }));

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname,'public')));


app.use(routes);


app.listen(3000,function(){
    console.log("Server is listening on port 3000");
});