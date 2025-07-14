import { Route, Routes } from "react-router-dom";
//import toast from "react-hot-toast";

import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      {/* <button
        onClick={() => toast.success("this is the first")}
        className="btn btn-primary"
      >
        Click me  
      </button> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* this represent the default path of the url */}
        <Route path="/create" element={<Createpage />} />
        {/* this represent the second path  */}
        <Route path="/note/:id" element={<NoteDetailPage />} />
        {/* this code represent's the id which is considered to be unique */}
      </Routes>
    </div>
  );
};

export default App;
