import JobCard from "./JobCard";

/** JobCardList displays job cards
 *
 * props - jobs array
 * state - none
 *
 * JobsList, CompaniesList --> { JobCardList } --> JobCard
 */
function JobCardList({ jobs }) {

  /** Displays job cards */
  function renderJobCards() {
    if (jobs === undefined) {
      return <i>Jobs Loading...</i>;
    } else {
      return jobs.map((j) => <JobCard key={j.id} job={j} />);
    }
  }

  return <div>{renderJobCards()}</div>;
}

export default JobCardList;
