const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");

 const Chat = require('./models/chat.js');
 const methodOverride = require("method-override");

app.set("views" , path.join(__dirname, "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname, "public")));
//parsing
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

main()
.then(() => {
  console.log("Connection successful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1 = new Chat({
  
//     from : "Rohini",
//     to : "Satya",
//    message : "Are you available for me",
//    created_at : new Date(),

// })
// ;
// chat1.save().then((res) => {
//   console.log(res);
// });
//Index Route
app.get("/chats" , async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs" , { chats });
});

//new routhe
app.get("/chats/new" , (req,res) => {
res.render("new.ejs");
});

//create route
app.post("/chats", (req,res) => {
 let { from,to,message } = req.body;
 let newChat = new Chat ({
     from : from,
     to : to,
     message: message,
     created_at : new Date(),
    
 });
//  console.log(newChat);
// });

newChat
.save()
.then((res) => {
  console.log("chats was saved");
})
.catch((err) => {
  console.log(err);
});

res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit" , async (req,res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs" , { chat });
});


//update route
app.put("/chats/:id" , async(req,res) => {
 let { id } = req.params;
 let { message: newMsg } = req.body;
 let updatedChats = await Chat.findByIdAndUpdate(
  id,
  {message : newMsg},
  {runValidators : true, new : true }
 );
 console.log(updatedChats);
 res.redirect("/chats");
});


 //delete 
 app.delete("/chats/:id" , async(req,res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
 });



app.get("/" , (req, res) => {
    res.send("root is working");
} );


app.listen(3000 , () =>
{
    console.log("server is listening on port 3000");
});
