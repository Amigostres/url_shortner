/*
  Goal make a server that returns a shorten Url:
  this will act like a DNS server
  when the link is opened it would request from our server and return the original URL
*/
require("dotenv").config()
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({
    name: "Jose",
    age: 22
  });
});

app.listen(process.env.PORT, () => {
  console.log('server is running');
})