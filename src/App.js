import "./App.css";
import LandingPage from "./components/landingPage";
import MenPage from "./components/menPage";
import TopNavBar from "./components/navBar";
import WomenPage from "./components/womenPage";
import InspirationPage from "./inspirationPage";

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
        <MenPage />
        <WomenPage />
        <InspirationPage />
      </div>
    </div>
  );
}

export default App;
