"use strict";

const session = require("express-session");
const express = require("express");
const http = require("http");
const uuid = require("uuid");
const WebSocket = require("ws");
const path = require("path");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//
// We need the same instance of the session parser in express and
// WebSocket server.
//
const sessionParser = session({
  saveUninitialized: false,
  secret: "$eCuRiTy",
  resave: false
});

//
// Serve static files from the 'public' folder.
//
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/client.js", function(req, res) {
  res.sendFile(path.join(__dirname + "/client.js"));
});

app.use(sessionParser);

app.post("/login", (req, res) => {
  const id = uuid.v4();

  console.log(`Updating session for user ${id}`);
  req.session.userId = id;
  res.send({ result: "OK", id });
});

app.delete("/logout", (request, response) => {
  console.log("Destroying session");
  request.session.destroy();
  response.send({ result: "OK", message: "Session destroyed" });
});

//
// Create HTTP server by ourselves.
//
const server = http.createServer(app);

const wss = new WebSocket.Server({
  verifyClient: (info, done) => {
    console.log("Parsing session from request...");
    sessionParser(info.req, {}, () => {
      console.log("Session is parsed!");
      done(true);
    });
  },
  server
});

const clients = {};

const sendAll = () => {
    Object.keys(clients).forEach(function(key,index) {
      console.log('---', key);
      try{
        clients[key].send('Ping');
      }catch(e){
          delete clients[key]
          console.log(`Connection with ${key} closed`);
      }
    });
};

wss.on("connection", (ws, req) => {
  const id = uuid.v4();
  clients[id] = ws;

  ws.on("message", message => {
    const parsedMessage = JSON.parse(message);

    console.log(
      `WS message ${parsedMessage.text} from user ${parsedMessage.userId}`
    );
  });
});

server.listen(8080, () => console.log("Listening on http://localhost:8080"));
