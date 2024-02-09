const mongoose = require('mongoose');
const Chat = require('./models/chat.js');


main()
.then(() => {
  console.log("Connection successful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

 let allchats = [
   
    { 
        from : "neha",
        to : "priya",
       message : "send me Notes",
       created_at : new Date(),
},

{ 
    from : "Raji",
    to : "Rohini",
   message : "Hear me out",
   created_at : new Date(),
},

{ 
    from : "Sherya",
    to : "Rohini",
   message : "Live your life",
   created_at : new Date(),
},
{ 
    from : "Rohini",
    to : "Satya",
   message : "Are you available for me",
   created_at : new Date(),
}
];

Chat.insertMany(allchats);