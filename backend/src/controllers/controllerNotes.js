import Note from "../models/notes.js";

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
      res.json(note); // this will send the note to the clientw
    }
  } catch (error) {
    console.log("Error get getNoteById controller", error);
    res.status(500).json({ message: "Internal server error!" });
  }
}

export async function getAllNotes(_, res) {
  // export represents in react that it can be used in somewhere else's
  try {
    const notes = await Note.find().sort({ createdAt: 1 }); // this will be run first and if this is considered to be false then
    res.status(200).json(notes); // convert's the notes to JSON format and send it to the client
  } catch (error) {
    console.log("Error get allNotesMethod controller", error);
    res.status(500).json({ message: "Internal error!" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNotes = await note.save(); // the keyword await is used to wait for the promise to be resolved before moving on to the next line of code
    console.log("Saved notes object", savedNotes); // to clarify a message that it is saved successfully!
    res.status(201).json({
      message: "This is a message",
      savedNotes,
    });
  } catch (error) {
    console.error("Error in createNotes controller", error);
    res
      .status(500)
      .json({ message: "Internal error this is not you this is on us!" });
  }
}

export async function updateNotes(req, res) {
  // this method is used to update the notes that the user alreadt has created!
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );
    if (!updateNote) {
      return res.status(404).json({ message: "The user could not be found" }); // if the user is not found in this case
    }
    res.status(200).json({ message: "Note has been successfully updated!" });
  } catch (error) {
    console.error("Error in createNotes controller", error);
    res.status(500).json({ message: "Error in updating sorry: :(" });
  }
}

export async function deleteNotes(req, res) {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) {
      // if the user in not found
      return res.status(404).json({ message: "The user could not be found" }); // If the user cannot be found
    }
    return res
      .status(200)
      .json({ message: "Note has been successfully deleted!" }); // if the user and it is found then it will be deleted!
  } catch (error) {
    console.error("Error in createNotes controller", error);
    return res
      .status(500)
      .json({ message: "It seem's that the user cannot be found!" });
  }
  //res.status(200).json({ message: "Notes has been successfully deleted!" });
}

// export async function deleteNotes(req, res) {
//   try {
//     const deleteNote = await Note.findByIdAndDelete(req.params.id);
//     if (!deleteNote)
//       return res.status(404).json({ message: "The user could not be found" }); // If the user cannot be found
//     res.status(200).json({ message: "Note has been successfully deleted!" }); // if the user and it is found then it will be deleted!
//   } catch (error) {
//     console.error("Error in createNotes controller", error);
//     res
//       .status(500)
//       .json({ message: "It seem's that the user cannot be found!" });
//   }
//   res.status(200).json({ message: "Notes has been successfully deleted!" });
// }
