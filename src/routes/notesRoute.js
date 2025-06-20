import express from "express";
import {
  getAllNotes,
  createNotes,
  updateNotes,
  deleteNotes,
} from "../controllers/controllerNotes.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/", getAllNotes);
router.post("/", createNotes);
router.put("/:id", updateNotes); // I am so learning hehe, so as you have notice the :id is considered to be putted in there because you can
// get to see the id in the postman so this is a concept that is considered to be really important indeed.
router.delete("/:id", deleteNotes);

//This is considered to be the role model for the notesRoute file
// router.get("/", (req, res) => {
//   res.status(200).send("fetched the notes successfully");
// });

export default router;
