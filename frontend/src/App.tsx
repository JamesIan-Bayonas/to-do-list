import { Route, Routes } from "react-router-dom";
import toast from "react-hot-toast";

import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import NoteDetailpage from "./pages/NoteDetailpage";

const App = () => {
  return (
    <div>
      <button
        onClick={() => toast.success("this is the first")}
        className="text-red-500"
      >
        Click me
      </button>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<NoteDetailpage />} />
        <Route path="/note/:id" element={<Createpage />} />
      </Routes>
    </div>
  );
};

export default App;
