import url from "url";
import express from "express";
const app = express();
app.get("/", (req, res) => {
  const ip = req.ip;
  console.dir(ip);
  const obj = {
    endoint: "indexPage",
    time: Date.now(),
    ip: ip,
  };
  //Analysis of Query Params
  const myUrl = url.parse(
    "https://api.venturedrobe.in/reportsAPI/?apiKey=89$67@$2024&user=admin",
    true
  );
  const queryParams = {
    apiKey: myUrl.query.apiKey,
    user: myUrl.query.user,
  };

  const myObj = [obj, queryParams];
  console.log(myUrl);

  res.end(JSON.stringify(myObj));
  //The url analysis of Query Parameters
});

app.listen(8000, (req, res) => {
  console.log("Backend Connected...");
});
/*
import http from "http";
import fs from "fs";
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} ip:${
    req.socket.remoteAddress
  } New Record recieved \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("About page");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});
myServer.listen(8000, () => {
  console.log("Server Started");
});
*/
