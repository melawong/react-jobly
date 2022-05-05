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
    <Link
      to={`/companies/${company.handle}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className="card border-light mb-3 mx-auto"
        style={{ maxWidth: "50rem" }}
      >
        <div className="card-body">
          <h4 className="card-title">{company.name}</h4>
          <p className="card-text">{company.description}</p>
          <img src={company.logoUrl} alt={company.handle} />
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;
