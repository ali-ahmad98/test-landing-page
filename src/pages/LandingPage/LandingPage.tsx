import Hero from "./components/Hero";
import AppFeature from "./components/AppFeature";
import HowItWorks from "./components/HowItWorks";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div className="page-container">
        <AppFeature />
        <HowItWorks />
      </div>
    </div>
  );
};

export default LandingPage;
