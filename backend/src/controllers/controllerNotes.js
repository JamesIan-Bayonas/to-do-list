import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal error?" });
  }
}

export function createNotes(req, res) {
  res.status(201).json({ message: "Note Created successfully!" });
}

export function updateNotes(req, res) {
  res.status(200).json({ message: "Notes have been successfully updated!" });
}

export function deleteNotes(req, res) {
  res.status(200).json({ message: "Notes has been successfully deleted!" });
}
