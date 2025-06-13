import Note from "../models/notes.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find(); // this will be run first and if this is considered to be false then
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error get allNotesMethod controller", error);

    res.status(500).json({ message: "Internal error!" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save(); // this will save the note to the database
    res.status(201).json({ message: "Notes created successfully!" });
  } catch (error) {
    console.error("Error in createNotes controller", error);
    res
      .status(500)
      .json({ message: "Internal error this is not you this is on us!" });
  }
}

export async function updateNotes(req, res) {
  res.status(200).json({ message: "Notes have been successfully updated!" });
}

export async function deleteNotes(req, res) {
  res.status(200).json({ message: "Notes has been successfully deleted!" });
}
