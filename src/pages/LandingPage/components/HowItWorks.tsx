import "./HowItWorks.scss";

import Underline from "assets/Underline.png";

const cardData = [
  {
    id: 1,
    title: "Downalod",
    text: "First you have to get the app with download.",
  },
  {
    id: 2,
    title: "Create Account",
    text: "Create you own account and make task easily.",
  },
  {
    id: 3,
    title: "Invite Others",
    text: "Invite your friends and family to use this app.",
  },
  {
    id: 4,
    title: "Start Structruing",
    text: "Start structruing and get you daily points.",
  },
];

const HowItWorks = () => {
  return (
    <div className="works-container" id="downloadapp">
      <div className="works-text">
        <h1>How It Works</h1>
        <img src={Underline} alt="Underline" />
        <br />
      </div>

      <br />
      <br />

      <div className="cards-container">
        {cardData.map((data, index) => (
          <div key={index} className="card">
            <div>
              <span>{data.id}</span>
            </div>
            <h4>{data.title}</h4>
            <small>{data.text}</small>
            <br />
            <br />

            <a href="#">{`Learn More >`}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
