import { useContext } from "react";
import UserContext from "../userContext";
import NumberFormat from "react-number-format";
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
      <div className="row">
        <div className="card-body col-md-9" style={{ textAlign: "left" }}>
          <h4 className="card-title">{job.title}</h4>
          <div className="card-subtitle">
            <strong>{job.companyName}</strong>
          </div>
          <p className="card-text">
            Salary:{" "}
            <NumberFormat
              value={job.salary}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />{" "}
            , Equity: {job.equity}
          </p>
        </div>
        <form
          className="col-md-3 mt-2 pe-3"
          style={{ textAlign: "right" }}
          onSubmit={handleSubmit}
        >
          {renderButton()}
        </form>
      </div>
    </div>
  );
}

export default JobCard;
