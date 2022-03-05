import "./App.css";
import LandingPage from "./components/landingPage";
import AboutPage from "./components/aboutPage";
import TopNavBar from "./components/navBar";
import WomenPage from "./components/womenPage";
import InspirationPage from "./components/inspirationPage";

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
        <AboutPage />
        <WomenPage />
        <InspirationPage />
      </div>
    </div>
  );
}

export default App;
