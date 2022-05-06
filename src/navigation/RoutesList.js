import "../App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../userContext";
import Home from "../common/Home";
import CompanyDetail from "../companies/CompanyDetail";
import CompaniesList from "../companies/CompaniesList";
import JobsList from "../jobs/JobsList";
import UserProfile from "../user/UserProfile";
import LoginForm from "../user/LoginForm";
import SignupForm from "../user/SignupForm";

/** Routes list defines routes for components */

function RoutesList() {
  const { user } = useContext(UserContext);

  function renderRoutes() {
    return user ? (
      <>
        <Route path="/companies" element={<CompaniesList />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/logout" element={<Navigate to="/" />} />
      </>
    ) : (
      <>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {renderRoutes()}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
