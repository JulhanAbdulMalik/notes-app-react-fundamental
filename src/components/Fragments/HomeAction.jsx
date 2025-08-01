import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { HiMiniPlus } from "react-icons/hi2";

function HomeAction() {
  return (
    <section className="homepage__action">
      <Button classname="action" title="Add note">
        <Link to="/note/new">
          <HiMiniPlus className="action-icon" />
        </Link>
      </Button>
    </section>
  );
}

export default HomeAction;
