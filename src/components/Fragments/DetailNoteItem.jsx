import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import { HiArrowLeftCircle } from "react-icons/hi2";

function DetailNoteItem({ id, title, createdAt, body }) {
  return (
    <>
      <div className="judul-action">
        <p />

        <Link to="/" title="Home" className="action-archive-backhome">
          <HiArrowLeftCircle className="action-icon-backhome" />{" "}
          <p className="action-text-backhome">Kembali</p>
        </Link>
      </div>

      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div
        className="detail-page__body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </>
  );
}

export default DetailNoteItem;
