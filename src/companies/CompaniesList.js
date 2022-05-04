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
    return companiesList.map((c) => <CompanyCard key={c.handle} company={c} />);
  }

  /** API call to retrieve companies list based on search */
  async function searchCompanies(searchTerm) {
    const compSearchRes = await JoblyApi.getCompanies({ name: searchTerm });
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
