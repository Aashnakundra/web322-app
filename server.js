var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: 8080");
}

app.use(express.static('public'));

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", home);
function home(req,res) {
res.redirect('/about');
}  


// setup another route to listen on /about
app.get("/about",About);
function About(req,res){
    res.sendFile(path.join(__dirname,"/views/about.html"));
}

app.get("/blog",Blogs)
function Blogs(req,res){
  filemy.PublishedPosts().then(pst) => res.send(pst))
  .catch(err) => {
    console.log(err);
  });

}

app.get("/posts",Posts)
function Posts(req,res){
  filemy.AllPosts().then(postt) => res.send(postt))
  .catch(err) => {
    console.log(err);
  });
}
app.get("/categories",Categories)
function Categories(req,res){
  filemy.AllCategories().then(pst) => res.send(categories))
  .catch(err) => {
    console.log(err);
  });

}