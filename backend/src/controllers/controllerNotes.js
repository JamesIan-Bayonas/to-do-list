export function getAllNotes(req, res) {
  res.status(200).send("Fetched notes successfully");
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
