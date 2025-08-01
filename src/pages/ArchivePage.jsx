import React from "react";
import NotesList from "../components/Fragments/NotesList";
import SearchBar from "../components/Fragments/SearchBar";
import {
  deleteNote,
  getAllNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: "",
    };

    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onUnarchiveNote = this.onUnarchiveNote.bind(this);

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteNote(id) {
    deleteNote(id);

    this.setState({
      notes: getAllNotes(),
    });
  }

  onUnarchiveNote(id) {
    unarchiveNote(id);

    this.setState({
      notes: getAllNotes(),
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword });

    this.props.keywordChange(keyword);
  }

  render() {
    const archivedNotes = getArchivedNotes();

    // Filtering untuk Pencarian
    const filteredNotes = archivedNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <div className="judul-action">
          <h2>Catatan Arsip</h2>

          <Link to="/" title="Home" className="action-archive-backhome">
            <HiArrowLeftCircle className="action-icon-backhome" />{" "}
            <p className="action-text-backhome">Kembali</p>
          </Link>
        </div>

        <SearchBar
          keyword={this.state.keyword}
          onKeywordChange={this.onKeywordChangeHandler}
        />

        {
          // Conditional rendering
          archivedNotes.length > 0 ? (
            <NotesList
              notes={filteredNotes}
              onDeleteNote={this.onDeleteNote}
              onArchiveNote={this.onUnarchiveNote}
            />
          ) : (
            <div className="notes-list-empty">
              <p>Tidak ada catatan</p>
            </div>
          )
        }
      </section>
    );
  }
}

export default ArchivePage;
