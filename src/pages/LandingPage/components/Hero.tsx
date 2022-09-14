import "./Hero.scss";

import Header from "shared/Header/Header";

import PlayIcon from "assets/PlayIcon.png";
import GooglePlay from "assets/GooglePlay.png";
import AppStore from "assets/AppStore.png";
import UserAvatar from "assets/UserAvatar.png";
import Phone from "assets/Phone.png";
import EllipseLarge1 from "assets/EllipseLarge1.png";
import EllipseLarge2 from "assets/EllipseLarge2.png";
import EllipseSmall1 from "assets/EllipseSmall1.png";
import EllipseSmall2 from "assets/EllipseSmall2.png";
import EllipseSmall3 from "assets/EllipseSmall3.png";

const Hero = () => {
  return (
    <div className="heroContainer" id="home">
      <Header />
      <section className="content-container">
        <div className="content">
          <div className="contentDiv1">
            <div>
              <div className="hero-text">
                <p>My Simple Family App</p>
                <h1>Get Points</h1>
                <h1>for Compliting</h1>
                <h1>Your Task.</h1>
                <p>
                  The points per task and rewards are set by the parents. Which can be redeemed for
                  awards.
                </p>
                <img src={EllipseLarge1} alt="EllipseLarge1" />
              </div>

              <div className="play-button">
                <img src={PlayIcon} alt="PlayIcon" /> &nbsp;&nbsp;
                <p>Watch Video</p>
              </div>

              <br />

              <div className="store-buttons">
                <img src={GooglePlay} alt="GooglePlay" />
                <img src={AppStore} alt="AppStore" />
              </div>

              <div className="user-avatar">
                <img src={UserAvatar} alt="UserAvatar" />
              </div>
            </div>
          </div>

          <div className="contentDiv2">
            <img src={Phone} alt="Phone" />
            <img src={EllipseLarge2} alt="EllipseLarge2" />
            <img src={EllipseSmall1} alt="EllipseSmall1" />
            <img src={EllipseSmall2} alt="EllipseSmall2" />
            <img src={EllipseSmall3} alt="EllipseSmall3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
