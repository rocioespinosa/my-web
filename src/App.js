import "./App.css";
import LandingPage from "./components/landingPage";
import TopNavBar from "./components/navBar";

function App() {
  return (
    <div className="app-container">
      <div className="app-topNavBar">
        {" "}
        <TopNavBar />
      </div>
      <div className="app-LPage">
        {" "}
        <div>
          <LandingPage />
        </div>
      </div>
    </div>
  );
}

export default App;
