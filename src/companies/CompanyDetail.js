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
  const [company, setCompany] = useState(null);

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
    if (company === null) {
      return <i>Loading...</i>;
    } else {
      return (
        <>
          <h1>{company.name}</h1>
          <p>{company.description}</p>
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
