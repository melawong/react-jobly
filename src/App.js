import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./navigation/Navbar";
import RoutesList from "./navigation/RoutesList";
import UserContext from "./userContext";

/** App renders Navbar component and RoutesList */
function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  /** Make API call to log in user */

  async function handleLogin() {
    // calls api auth route with form data
    // returns token. update local storage with token
    // update user state and token state
  }

  /** Make API call to sign up user */

  async function handleSignup() {
    // calls api auth route with form data
    // returns token. update local storage with token
    // update user state and token state
  }

  function logout() {
    // clear local storage
    // clears user and token states
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
