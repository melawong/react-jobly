import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import CompanyDetail from "./CompanyDetail";
import CompaniesList from "./CompaniesList";
import JobsList from "./JobsList";

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
