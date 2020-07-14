const express = require("express");
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
const session=require('express-session');

const app=express();

app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret: "crazysecretstuff", logged: false, originalRoute: ""}));
app.use(express.static(__dirname + "/public"));

mongoose.Promise=global.Promise;
mongoose.connect("mongodb+srv://test:test@cluster0-bi1rv.mongodb.net/quiz-bank?retryWrites=true&w=majority",
{ useUnifiedTopology: true,useNewUrlParser: true },function(err){
    if(err) console.log(err);
    console.log("db is connected");
});
    


var models = {};
models.Question = require("./models/question")(app.mongoose).model;
models.Score = require("./models/score")(app.mongoose).model;

require("./routes/routes")(app, models);





app.listen(3000,()=>{
    console.log('app is live at 3000');
});