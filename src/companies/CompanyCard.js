import { Link } from "react-router-dom";

/** Displays company information as link to company detail
 *
 * props - company
 * state - none
 * 
 * CompaniesList --> { CompanyCard } --> CompanyDetail
*/

function CompanyCard({ company }) {
  return (
    <Link to={`/companies/${company.handle}`}>
      <div>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        <img src={company.logoUrl} alt={company.handle} />
      </div>
    </Link>
  );
}

export default CompanyCard;
