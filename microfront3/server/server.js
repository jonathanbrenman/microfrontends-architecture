const express = require("express");
const http = require("http");
const path = require("path");
const app = express();

let oneYear = 1 * 365 * 24 * 60 * 60 * 1000;

app.use(express.static(path.join(__dirname, "dist"), { maxAge: oneYear }));

app.get("/app3", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.get("/app3/*", (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/" + req.path.replace("/app3/", "")));
});

const port = "80";
app.set("port", port);

const server = http.createServer(app);
server.listen(port, "0.0.0.0", () =>
  console.log(`Running server http://0.0.0.0:${port}`)
);
