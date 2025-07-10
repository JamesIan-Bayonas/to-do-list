import { Route, Routes } from "react-router-dom";
//import toast from "react-hot-toast";

import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import NoteDetailpage from "./pages/NoteDetailpage";

const App = () => {
  return (
    <div data-theme="dim">
      {/* <button
        onClick={() => toast.success("this is the first")}
        className="btn btn-primary"
      >
        Click me
      </button> */}
      <Routes>
        <Route path="/" element={<Homepage />} />{" "}
        {/* this represent the default path of the url */}
        <Route path="/create" element={<NoteDetailpage />} />{" "}
        {/* this represent the second path  */}
        <Route path="/note/:id" element={<Createpage />} />{" "}
        {/* this code represent's the id which is considered to be unique */}
      </Routes>
    </div>
  );
};

export default App;
