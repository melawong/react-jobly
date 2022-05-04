/** Displays a single job card
 *
 * props - job
 * state - none
 *
 * JobCardList --> { JobCard }
 */

function JobCard({ job }) {
  return (
    <div>
      <h3>{job.title}</h3>
      <h4>{job.companyName}</h4>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  );
}

export default JobCard;
