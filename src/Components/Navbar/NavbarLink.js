import { Link } from "react-router-dom";

export const NavbarLink = (props) => {
  return (
    <li className="nav-item mb-3">
      <Link
        to={props.href}
        className="nav-link active"
        onClick={props.clickEvent}
      >
        {props.title}
      </Link>
    </li>
  );
};
