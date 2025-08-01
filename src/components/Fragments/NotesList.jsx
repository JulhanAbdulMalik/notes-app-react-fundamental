import { Link } from "react-router-dom";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDeleteNote, onArchiveNote }) {
  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          id={note.id}
          onDeleteNote={onDeleteNote}
          onArchiveNote={onArchiveNote}
        />
      ))}
    </section>
  );
}

export default NotesList;
