import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Apple</h1>
    go to api link
    <a href="/api" >API</a>
    `);
});

app.get("/api", (req, res) => {
  res.json({
    "id": 1,
    "name": "Anil Sidhu",
    "email": "anil.sidhu@example.com",
    "isActive": true,
    "roles": ["admin", "editor"],
    "profile": {
      "age": 28,
      "gender": "male",
      "skills": ["JavaScript", "React", "Node.js"]
    },
    "createdAt": "2025-08-28T22:15:00Z"
  }
  );
});

app.listen(3000, () => console.log("Server running..."));
