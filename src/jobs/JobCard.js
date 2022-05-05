import { useContext } from "react";
import UserContext from "../userContext";
/** Displays a single job card
 *
 * props - job
 * state - none
 *
 * JobCardList --> { JobCard }
 */

function JobCard({ job }) {
  const { user, handleApplication } = useContext(UserContext);
  function renderButton() {
    if (user) {
      // make job array in uwer into a set
      return user.applications.has(job.id) ? (
        <button className="btn btn-success" disabled>
          Applied
        </button>
      ) : (
        <button className="btn btn-primary">Apply</button>
      );
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleApplication(user.username, job.id);
  }

  return (
    <div
      className="card border-secondary mb-3 mx-auto container-flex"
      style={{ maxWidth: "40rem" }}
    >
      <div className="card-header">{job.companyName}</div>
      <div className="card-body">
        <h4 className="card-title">{job.title}</h4>
        <p className="card-text">Salary: {job.salary}</p>
        <p className="card-text">Equity: {job.equity}</p>
        <form onSubmit={handleSubmit}>{renderButton()}</form>
      </div>
    </div>
  );
}

export default JobCard;
