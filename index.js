import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node + Express on Vercel!");
});

app.listen(3000, () => console.log("Server running..."));
