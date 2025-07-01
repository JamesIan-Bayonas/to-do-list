import { Route, Routes } from "react-router";

import Homepage from "./pages/Homepage";
import NoteDetailpage from "./pages/NoteDetailpage";
import Createpage from ".page/Createpage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      <button onClick={() => toast.success("this is the first")}></button>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
