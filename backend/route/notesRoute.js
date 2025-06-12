import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("fetched the notes successfully");
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Note Created successfully!" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Notes have been successfully updated!" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Notes has been successfully deleted!" });
});

export default router;

// app.get("/api/notes", (req, res) => {
//   res.status(200).send("you got notes and I don't");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({ message: "Note Created successfully!" });
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "Notes have been successfully updated!" });
// });

// app.delete("/api/notes", (req, res) => {
//   res.status(200).send({ message: "Notes have been successfully deleted" });
// });
