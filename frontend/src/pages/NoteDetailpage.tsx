import { useParams, useNavigate } from "react-router-dom";

const NoteDetailpage = () => {
  const { id } = useParams();
  console.log("The ID is here please see: ", id);

  return <div>NoteDetaillpage</div>;
};

export default NoteDetailpage;
