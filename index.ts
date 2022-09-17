import express, { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});
app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
