import { useEffect, useState } from "react";
import "./AppFeature.scss";

import Button from "shared/Button/Button";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";

import Underline from "assets/Underline.png";
import TickIcon from "assets/TickIcon.png";
import Phone from "assets/Phone.png";
import EllipseLarge2 from "assets/EllipseLarge2.png";

const featureData1 = [
  "Prevent Arguments",
  "Save Time",
  "Provide family Structure",
  "Gamify Work",
  "Cleaner House",
];

const featureData2 = [
  "Less Stress",
  "Improve Family Communcation",
  "Improve kids responsibilty skills",
  "Imrove team feeling of family",
  "Helps reduce kids gaming time",
];

const AppFeature = () => {
  const [features1, setFeatures1] = useState(featureData1);
  const [features2, setFeatures2] = useState(featureData2);
  const [showSeeMore, setShowSeeMore] = useState({});
  const [listOpened, setListOpened] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 991) setShowSeeMore({ display: "" });
    if (window.innerWidth > 991) setShowSeeMore({ display: "none" });
  };

  const seeButtonHandler = async (e: any) => {
    setListOpened((previous) => !previous);
    if (!listOpened) setFeatures2([...featureData1, ...featureData2]);
    if (listOpened) setFeatures2([...featureData2]);
  };

  return (
    <div className="feature-container" id="ourstory">
      <div className="feature-text">
        <h1>App Feature</h1>
        <img src={Underline} alt="Underline" />
        <br />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quam suspendisse amet est
        pharetra ipsum.
      </p>

      <br />
      <br />

      <div className="feature-content">
        <div className="content-div1">
          {features1.map((feature, index) => (
            <div key={index}>
              <p>{feature}</p> &nbsp;&nbsp;
              <img src={TickIcon} alt="TickIcon" />
            </div>
          ))}
        </div>

        <div className="content-div2">
          <img src={Phone} alt="Phone" />
          <img src={EllipseLarge2} alt="EllipseLarge2" />
        </div>

        <div className="content-div3">
          {features2.map((feature, index) => (
            <div key={index}>
              <img src={TickIcon} alt="TickIcon" /> &nbsp;&nbsp;
              <p>{feature}</p>
            </div>
          ))}
          <div style={showSeeMore}>
            <Button
              text={!listOpened ? "See More" : "See Less"}
              color="#42A4FF"
              icon={!listOpened ? <BsChevronDown /> : <BsChevronUp />}
              onClick={seeButtonHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeature;
