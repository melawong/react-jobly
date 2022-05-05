import { useContext } from "react";
import UserContext from "../userContext";

function Home() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1> Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      {user ? <h2> Welcome Back, {user.username}! </h2> : ""}
    </div>
  );
}

export default Home;
