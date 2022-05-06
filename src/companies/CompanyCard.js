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
      style={{ textDecoration: "none", maxWidth: "50rem" }}
      className="card border-light mb-3 mx-auto d-flex"
    >
      <div className="card-body">
        <h4 className="card-title">
          {company.logoUrl ? (
            <img
              src={company.logoUrl}
              alt={company.handle}
              style={{ height: "20px" }}
            />
          ) : (
            ""
          )}
          {"           "}
          {company.name}
        </h4>

        <p className="card-text">{company.description}</p>
      </div>
    </Link>
  );
}

export default CompanyCard;
