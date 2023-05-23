import http from "http";
import socketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = socketIO(httpServer);

wsServer.on("connection", (socket) => {
  socket.on("enter_room", (msg, done) => {
    console.log(msg);
    setTimeout(() => {
      done();
    }, 10000);
  });
});

// const wss = new WebSocket.Server({ server });

// const sockets = [];

// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   socket["nickname"] = "Anon";
//   console.log("Connected to Browser ✅");
//   socket.on("close", () => console.log("Disconneted from the Browser ❌"));

//   // socket.on("message", (message) => {
//   //   sockets.forEach((aSocket) => aSocket.send(message));
//   // });  object blob이 떠서 아래코드로 바꿈`

//   socket.on("message", (msg) => {
//     // message = message.toString("utf-8");
//     const message = JSON.parse(msg);
//     switch (message.type) {
//       case "new_message":
//         sockets.forEach((aSocket) =>
//           aSocket.send(`${socket.nickname}: ${message.payload}`)
//         );
//       case "nickname":
//         socket["nickname"] = message.payload;
//     }
//   });
// });
const handleListen = () => console.log("Listening on http://localhost:3000");
httpServer.listen(3000, handleListen);
