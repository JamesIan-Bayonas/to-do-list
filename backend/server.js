import express from "express";

const app = express();

app.listhen(5001, () => {
  console.log("Server started on PORT:: 5001");
});
