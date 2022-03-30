import "./App.css";
import LandingPage from "./components/landingPage";
import America from "./components/america";
import TopNavBar from "./components/navBar";
import Europe from "./components/europe";
import Europe2 from "./components/europe2";
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
        <LandingPage id="landing" />
        <America id="america" />
        <Europe id="europe" />
        <Europe2 id="europe2" />
        <Africa id="africa" />
        <Asia id="asia" />
      </div>
    </div>
  );
}

export default App;
