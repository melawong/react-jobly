import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./joblyApi";
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

  useEffect(function getCompaniesOnMount() {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompaniesList([...companies]);
    }
    getCompanies();
  }, []);

  function renderCompanies() {
    return companiesList.map((c) => <CompanyCard key={c.handle} company={c} />);
  }

  return <div>{renderCompanies()}</div>;
}

export default CompaniesList;
