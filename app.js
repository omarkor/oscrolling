//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const  app = express();
app.use(express.static("public"))

var items = [];
var workItems = []
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    var today = new Date();
    var option = {
        weekday:"long",
        day:"numeric",
        month: "long"

    };
    let day = today.toLocaleDateString("en-US", option)

    
    res.render("list", {listTitle: day, newListItem :items })

})    
app.post("/", function(req, res){
    var item = req.body.newitem

    if(req.body.list==="work"){
     workItems.push(item)
     res.redirect("/work");
    }else{
     items.push(item)
     res.redirect("/");
    };
})
app.get("/work",function(req,res){
    res.render("list", {listTitle:"work list", newListItem: workItems})
})
/* app.post("/work", function(req, res){
    var item = req.body.newitem
    workItems.push(item)
    res.redirect("/work");
})  */
app.get("/about", function(req, res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("server start on port 3000")
})

