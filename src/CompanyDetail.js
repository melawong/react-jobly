import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./joblyApi";
import JobCardList from "./JobCardList";

/** Renders detail on company based on handle parameter. Makes API call
 *
 * State
 * - company
 *
 * Effect:
 * - set company on mount
 */

function CompanyDetail() {
  const params = useParams();
  const [company, setCompany] = useState(null);

  useEffect(function getCompanyOnMount() {
    async function getCompany() {
      const c = await JoblyApi.getCompany(params.handle);
      setCompany({ ...c });
    }
    getCompany();
  }, []);

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

  return <div>{renderCompanyDetails()}</div>;
}

export default CompanyDetail;
