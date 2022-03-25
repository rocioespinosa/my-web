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
        <LandingPage />
        <America />
        <Europe />
        <Europe2 />
        <Africa />
        <Asia />
      </div>
    </div>
  );
}

export default App;
