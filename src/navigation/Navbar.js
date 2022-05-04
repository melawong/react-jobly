import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../userContext";

/** Navigation bar displays links to routes */

function Navbar() {
  const { user } = useContext(UserContext);

  function renderLinks() {
    return user ? (
      <>
        <span>
          <Link to={`/companies`}>Companies</Link>
        </span>
        <span>
          <Link to={`/jobs`}>Jobs</Link>
        </span>
        <span>
          <Link to={`/profile`}>Profile</Link>
        </span>
        <span>
          <Link to={`/logout`}>Logout</Link>
        </span>
      </>
    ) : (
      <>
        <span>
          <Link to={`/login`}>Login</Link>
        </span>
        <span>
          <Link to={`/signup`}>Signup</Link>
        </span>
      </>
    );
  }

  return (
    <>
      <nav>
        <span>
          <Link to={`/`}>Jobly</Link>
        </span>
        {renderLinks()}
      </nav>
    </>
  );
}

export default Navbar;
