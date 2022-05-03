import { Link } from "react-router-dom";

/** Navigation bar displays links to routes */

function Navbar() {
  return (
    <>
      <nav>
        <span>
          <Link to={`/`}>Jobly</Link>
        </span>
        <span>
          <Link to={`/companies`}>Companies</Link>
        </span>
        <span>
          <Link to={`/jobs`}>Jobs</Link>
        </span>
      </nav>
    </>
  );
}

export default Navbar;
