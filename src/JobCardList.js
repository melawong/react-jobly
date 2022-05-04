import JobCard from "./JobCard";

function JobCardList({ jobs }) {
  console.log(jobs);
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
