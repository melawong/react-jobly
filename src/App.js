import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./navigation/Navbar";
import RoutesList from "./navigation/RoutesList";

/** App renders Navbar component and RoutesList */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
