import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils/index";
import Button from "../Elements/Button";
import { HiArchiveBoxArrowDown, HiTrash } from "react-icons/hi2";

function NoteItem({ id, title, createdAt, body, onDeleteNote, onArchiveNote }) {
  return (
    <article className="note-item">
      <Link to={`/note/${id}`} className="note-item__link">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      </Link>
      <p
        className="note-item__body"
        dangerouslySetInnerHTML={{ __html: body }}
      />

      <div className="note-item__action-cart">
        <Button title="Arsipkan" onClick={() => onArchiveNote(id)}>
          <HiArchiveBoxArrowDown />
        </Button>
        <Button title="Hapus" onClick={() => onDeleteNote(id)}>
          <HiTrash />
        </Button>
      </div>
    </article>
  );
}

export default NoteItem;
