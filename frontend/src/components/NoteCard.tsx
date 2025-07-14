import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom"; // IMPORTANT: Use 'react-router-dom' for web applications
import formatDate from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ setNotes, note }) => {
  // note, setNotes
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour :: or refreshing the page

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };
  return (
    // if the code logic above is correct, or false it will render the Homepage.tsx component
    <Link
      to={`/note/${note._id}`} // This is the link to the note detail page
      className="card bg-base-100 hover:shadow-lg transition-all duration-200
        border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            {/* The PenSquareIcon here is just an icon, not a link/button for editing.
                If it's meant to be an edit button, it should be wrapped in a <Link> or <button> */}
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />{" "}
              {/* This creates the red trash bin icon */}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
