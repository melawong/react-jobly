import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./navigation/Navbar";
import RoutesList from "./navigation/RoutesList";
import UserContext from "./userContext";
import JoblyApi from "./helpers/joblyApi";
import jwtDecode from "jwt-decode";

/** App renders Navbar component and RoutesList */

const TOKEN_NAME = "joblyToken";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_NAME));

  useEffect(function getTokenOnMount() {
    async function getToken() {
      const userToken = localStorage.getItem(TOKEN_NAME);
      if (userToken) {
        setToken(userToken);
        setUser(jwtDecode(userToken));
      }
    }
    getToken();
  }, []);

  /** Make API call to log in user */

  async function handleLogin(formData) {
    const userToken = await JoblyApi.login(formData);
    setToken(userToken);
    setUser(jwtDecode(userToken));
    localStorage.setItem(TOKEN_NAME, userToken);
    JoblyApi.token = userToken;
  }

  /** Make API call to sign up user */

  async function handleSignup(formData) {
    const newUserToken = await JoblyApi.signUp(formData);
    setToken(newUserToken);
    setUser(jwtDecode(newUserToken));
    localStorage.setItem(TOKEN_NAME, newUserToken);
    JoblyApi.token = newUserToken;
  }

  /** Log user out, reset states and local storage */
  function logout() {
    localStorage.removeItem(TOKEN_NAME);
    setToken("");
    setUser(null);
    JoblyApi.token = "";
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ user, token, handleLogin, handleSignup, logout }}
        >
          <Navbar />
          <RoutesList />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
