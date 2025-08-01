import React from "react";
import DetailNoteItem from "../components/Fragments/DetailNoteItem";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(this.props.id),
    };

    console.log(this.state.note);
  }

  render() {
    // Kondisi jika tidak ada catatan
    if (!this.state.note) {
      return (
        <div className="notes-list-empty">
          <p>Tidak ada catatan dengan id: {this.props.id}</p>
        </div>
      );
    }

    return (
      <section className="detail-page">
        <DetailNoteItem {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
