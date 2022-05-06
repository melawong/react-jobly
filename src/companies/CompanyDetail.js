import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../helpers/joblyApi";
import JobCardList from "../jobs/JobCardList";
import SearchForm from "../common/SearchForm";

/** Renders detail on company based on handle parameter. Makes API call
 *
 * State
 * - company
 *
 * Effect:
 * - set company on mount
 *
 * RoutesList --> {CompanyDetail} --> JobCardList
 */

function CompanyDetail() {
  const params = useParams();
  const [company, setCompany] = useState({});

  /** API call to retrieve single company on initial render */
  useEffect(function getCompanyOnMount() {
    async function getCompany() {
      const c = await JoblyApi.getCompany(params.handle);
      setCompany({ ...c });
    }
    getCompany();
  }, []);

  /** Displays company details and JobsCardList of associated jobs */
  function renderCompanyDetails() {
    if (Object.keys(company).length === 0) {
      return <i>Loading...</i>;
    } else {
      return (
        <>
          <h1 className="mt-3 display-5">{company.name}</h1>
          <h5 className="mb-3 fw-light">{company.description}</h5>
          <JobCardList jobs={company.jobs} />
        </>
      );
    }
  }

  return (
    <>
      <div>{renderCompanyDetails()}</div>
    </>
  );
}

export default CompanyDetail;
