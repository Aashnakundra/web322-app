/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Aashna Kundra Student ID: 163028210 Date: 2/5/2023
*
*  Cyclic Web App URL: https://app.cyclic.sh/#/deploy/Aashnakundra/web322-app
*
*  GitHub Repository URL: https://github.com/Aashnakundra/web322-app
*
********************************************************************************/ 
var express = require("express");
var app = express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;

var filemy = require("./blog-service");  

app.use(express.static("public"));

app.get("/", home);
function home(req, res) {
  res.redirect("/about");
}


app.get("/about",About); 
function About(req,res){
    res.sendFile(path.join(__dirname,"/views/about.html"));
};
      
app.get("/blog", Blogs)
function Blogs(req,res){
    filemy.PublishedPosts().then((pst) => res.send(pst))
    .catch((err) => {
      console.log(err);
    });
}

app.get("/posts",Posts)
function Posts(req,res)
{
    filemy.AllPosts().then ((postt) => res.send(postt))
    .catch((err) => {
        console.log(err);
    });
}

app.get("/categories",Categories)
function Categories(req,res)
{
    filemy.AllCategories().then ((categories) => res.send(categories))
    .catch((err) => {
        console.log(err);
    });
}


filemy.start().then((res) =>
{
    app.listen(HTTP_PORT, () => {
      console.log(`Express http server listening on ${HTTP_PORT}`);
    });
 });
  