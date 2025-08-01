import { useNavigate } from "react-router-dom";
import InputNote from "../components/Fragments/InputNote";
import { addNote } from "../utils/local-data";

function AddNewPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);

    navigate("/");
  }

  return (
    <section className="add-new-page">
      <InputNote addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddNewPage;
