import { useContext } from "react";
import UserContext from "../userContext";

function UserApplications() {
  // const [appsLoaded, setAppsLoaded] = useState(false);
  // const [applications, setApplications] = useState([]);
  const { user } = useContext(UserContext);

  function renderJobApplications() {
    return user.jobs.length > 0 ? (
      user.jobs.map((j) => (
        <li key={j.id}>
          {j.title} - <i>{j.company.name}</i>
        </li>
      ))
    ) : (
      <p>No applications yet!</p>
    );
  }

  return (
    <div className="col-md-6 mt-2">
      <h2> Job Applications </h2>
      <ul style={{ textAlign: "left" }}>{renderJobApplications()}</ul>
    </div>
  );
}

export default UserApplications;
