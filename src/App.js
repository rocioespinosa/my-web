import "./App.css";
import LandingPage from "./components/landingPage";
import SouthAmerica from "./components/southAmerica";
import TopNavBar from "./components/navBar";
import Europe from "./components/europe";
import Africa from "./components/africa";
import Asia from "./components/asia";

function App() {
  return (
    <div className="app-container">
      <div className="app-topNavBar">
        {" "}
        <TopNavBar />
      </div>
      <div className="app-LPage">
        {" "}
        <LandingPage />
        <SouthAmerica />
        <Europe />
        <Africa />
        <Asia />
      </div>
    </div>
  );
}

export default App;
