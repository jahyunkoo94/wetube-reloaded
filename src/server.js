import express from "express";

const PORT = 5000;

const app = express();

const logger = (req, res, next) => {
  console.log("I'm in the middle!");
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("you are allowed");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

const handleProtected = (req, rex) => {
  return res.send("Welcome ");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
