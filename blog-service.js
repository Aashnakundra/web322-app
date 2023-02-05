const exp = require("express");
const fs = require("fs");

module.exports = {
    start: () => {
      return new Promise((res,rej) =>
       {
        let resoll = 1;
         fs.readFile(`./data/posts.json`, "utf8", (err, data) => {
         if (err) {
         resoll = 0;
         rej(console.log("unable to read file!"));
      } else {
        if (resoll != 0) {
        posts = JSON.parse(data);
          res(console.log("Posts are read successfully!"));
        }
      }})
    
      fs.readFile(`./data/categories.json`, "utf8", (err, data) => {
        if (err) {
          resoll = 0;
          rej(console.log("unable to read file!"));
        } else {
          if (resoll != 0) {
            categories = JSON.parse(data);
            res(console.log("Categories are read successfully!"));
          }
        }
      });
   
    
    })
    },
    AllPosts: () => {
        return new Promise((res, rej) => {
            fs.readFile("./data/posts.json", "utf8", (err, data) => {
              if (JSON.parse(data).length <= 0) {
                rej("no results returned");
              } else {
                res(JSON.parse(data));
              }
            });
          });
    },
    PublishedPosts: () =>{
        return new Promise((res, rej) => {
            fs.readFile("./data/posts.json", "utf8", (err, data) => {
              let blogs = [];
              if (JSON.parse(data).length <= 0) {
                rej("no results returned");
              } else {
                JSON.parse(data).forEach((e) => {
                  if (e.published == true) {
                    blogs.push(e);
                  }
                });
                res(blogs);
              }
            });
          });
          
    },
    AllCategories: () => {
       return new Promise((res, rej) => {
        fs.readFile("./data/categories.json", "utf8", (err, data) => {
          if (data.length <= 0) {
            rej("no results returned");
          } else {
            res(JSON.parse(data));
          }
        });
      }); 
    },
  };
  