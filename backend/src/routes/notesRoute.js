import express from "express";
import {
  getAllNotes,
  createNotes,
  updateNotes,
  deleteNotes,
  getNoteById,
} from "../controllers/controllerNotes.js";

const router = express.Router();

router.get("/:id", getNoteById);
router.get("/", getAllNotes);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;

// This is considered to be the role model for the notesRoute file
// router.get("/", (req, res) => {
//   res.status(200).send("fetched the notes successfully");
// });
