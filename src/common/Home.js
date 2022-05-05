import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../userContext";

function Home() {
  const { user } = useContext(UserContext);
  return (
    <div className="homepage">
      <div className="col-12">
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        {user ? (
          <h2> Welcome Back, {user.username}! </h2>
        ) : (
          <>
            <button className="btn btn-primary mx-1">
              <Link to={`/login`} style={{ textDecoration: "none" }}>
                Login
              </Link>
            </button>
            <button className="btn btn-primary mx-1">
              <Link to={`/signup`} style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
