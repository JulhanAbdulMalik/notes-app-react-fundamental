import Button from "../Elements/Button";
import Input from "../Elements/Input";
import React from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Tema standar (snow)
import { HiDocumentArrowDown } from "react-icons/hi2";

class InputNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "", // State ini berisi string HTML dari editor
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitAddNote = this.onSubmitAddNote.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChange(value) {
    this.setState({ body: value });
  }

  onSubmitAddNote(event) {
    event.preventDefault();

    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });
  }

  render() {
    return (
      <>
        <div className="add-new-page__input ">
          <Input
            classname="add-new-page__input__title"
            type="text"
            placeholder="Judul Catatan"
            required
            onChange={this.onTitleChange}
            value={this.state.title}
          />

          <ReactQuill
            placeholder="Tulis catatanmu disini..."
            theme="snow"
            value={this.state.body}
            onChange={this.onBodyChange}
          />
        </div>

        <div className="add-new-page__action">
          <Button
            classname="action"
            title="Simpan"
            onClick={this.onSubmitAddNote}
          >
            <HiDocumentArrowDown />
          </Button>
        </div>
      </>
    );
  }
}

export default InputNote;
