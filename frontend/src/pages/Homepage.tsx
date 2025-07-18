import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../lib/axios";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";
import { Note } from "../types/Note";
import NotesNotFound from "../components/NotesNotFound";
//import NotesNotFound from "../components/NotesNotFound";

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]); // Initialize notes as an empty array of Note type note:: this is TSX
  const [loading, setLoading] = useState(true); //

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes"); // Get the notes from the backend
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes(); // This line of code here will call the fetchNotes function to fetch the notes from the backend.
  }, []);

  return (
    /* if wether the code is considered to be true or false, it will render the Homepage.tsx component */
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
