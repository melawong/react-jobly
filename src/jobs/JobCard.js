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
        <button disabled>Applied</button>
      ) : (
        <button>Apply</button>
      );
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleApplication(user.username, job.id);
  }

  return (
    <div>
      <h3>{job.title}</h3>
      <h4>{job.companyName}</h4>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <form onSubmit={handleSubmit}>{renderButton()}</form>
    </div>
  );
}

export default JobCard;
