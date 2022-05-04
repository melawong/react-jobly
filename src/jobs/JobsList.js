import { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import JoblyApi from "../helpers/joblyApi";
import SearchForm from "../common/SearchForm";


/** JobsList component calls API to get list of jobs to display
 *
 * props - none
 * state - jobsList
 * effect - getJobsOnMount
 *
 * RoutesList --> { JobsList } --> SearchForm, JobCardList
  */
function JobsList() {
  const [jobsList, setJobsList] = useState([]);

  /** Retrieves all jobs on initial render */
  useEffect(function getJobsOnMount() {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();
      setJobsList([...jobs]);
    }
    getJobs();
  }, []);

  /** Displays loading state or list of job cards */
  function renderJobDetails() {
    if (jobsList === null) {
      return <i>Loading...</i>;
    } else {
      return <JobCardList jobs={jobsList} />;
    }
  }

  /** Calls API to retrieve jobs by search term */
  async function searchJobs(searchTerm) {
    const jobSearchRes = await JoblyApi.getJobs({ title: searchTerm });
    setJobsList(jobSearchRes);
  }

  return (
    <>
      <SearchForm handleSearch={searchJobs} />
      <div> {renderJobDetails()} </div>
    </>
  );
}

export default JobsList;
