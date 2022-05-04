import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../helpers/joblyApi";
import SearchForm from "../common/SearchForm";

/** Displays list of companies. Renders them with individual Company cards
 *
 * State:
 * - companies: array
 *
 * Effect:
 * - renders all companies on mount
 */

function CompaniesList() {
  const [companiesList, setCompaniesList] = useState([]);

  /** API call retrieves list of all companies on initial render */
  useEffect(function getCompaniesOnMount() {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompaniesList([...companies]);
    }
    getCompanies();
  }, []);

  /** Displays all company cards */
  function renderCompanies() {
    if (companiesList.length === 0) {
      return <i>Loading...</i>;
    } else if (companiesList[0] === null) {
      return <em>No companies found!</em>;
    } else {
      return companiesList.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ));
    }
  }

  /** API call to retrieve companies list based on search */
  async function searchCompanies(searchTerm) {
    let compSearchRes = await JoblyApi.getCompanies({ name: searchTerm });
    compSearchRes = compSearchRes.length === 0 ? [null] : compSearchRes;
    setCompaniesList(compSearchRes);
  }

  return (
    <>
      <SearchForm handleSearch={searchCompanies} />
      <div>{renderCompanies()}</div>
    </>
  );
}

export default CompaniesList;
