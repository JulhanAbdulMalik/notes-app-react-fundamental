import React from "react";
import NotesList from "../components/Fragments/NotesList";
import SearchBar from "../components/Fragments/SearchBar";
import HomeAction from "../components/Fragments/HomeAction";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
} from "../utils/local-data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onArchiveNote = this.onArchiveNote.bind(this);

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteNote(id) {
    deleteNote(id);

    this.setState({
      notes: getAllNotes(),
    });
  }

  onArchiveNote(id) {
    archiveNote(id);

    this.setState({
      notes: getAllNotes(),
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword });

    this.props.keywordChange(keyword);
  }

  render() {
    const activeNotes = getActiveNotes();

    // Filtering untuk Pencarian
    const filteredNotes = activeNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          onKeywordChange={this.onKeywordChangeHandler}
        />

        {
          // Conditional rendering
          activeNotes.length > 0 ? (
            <NotesList
              notes={filteredNotes}
              onDeleteNote={this.onDeleteNote}
              onArchiveNote={this.onArchiveNote}
            />
          ) : (
            <div className="notes-list-empty">
              <p>Tidak ada catatan</p>
            </div>
          )
        }

        <HomeAction />
      </section>
    );
  }
}

export default HomePage;
