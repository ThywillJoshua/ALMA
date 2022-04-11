import "./Nav.css";
import { Link } from "react-router-dom";

export default function name() {
  return (
    <nav className="nav">
      <Link to="/">
        <span className="logo">ALMA</span>
      </Link>
    </nav>
  );
}
