import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../common/Home";
import CompanyDetail from "../companies/CompanyDetail";
import CompaniesList from "../companies/CompaniesList";
import JobsList from "../jobs/JobsList";

/** Routes list defines routes for components */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<CompaniesList />} />
      <Route path="/jobs" element={<JobsList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
