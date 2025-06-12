import express from "express"; // imports the framework:: (express.js) and take note that express is a function

const app = express(); // created an instance of express

app.get("/api/notes", (req, res) => {
  res.status(200).send("you got notes and I don't");
});

app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note Created successfully!" });
});

app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Notes have been successfully updated!" });
});

app.delete("/api/notes", (req, res) => {
  res.status(200).send({ message: "Notes have been successfully deleted" });
});

app.listen(5001, () => {
  console.log("Server started on PORT:: 5001");
});
