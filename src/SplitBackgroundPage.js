import { useState } from "react";
import "./SplitBackgroundPage.css";
import photo from "./photo.jpeg";
import presentationImage from "./presentation.png";

const SplitBackgroundPage = () => {
  const [showAboutText, setShowAboutText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const openLink = (url) => window.open(url, "_blank", "noopener,noreferrer");

  const handleMouseEnter = () => {
    setIsExiting(false);
    setShowAboutText(true);
  };

  const handleMouseLeave = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowAboutText(false);
      setIsExiting(false);
    }, 400); // Match the fadeOut animation duration
  };

  return (
    <div className="page">
      {/* Background halves */}
      <div className="top-half" />
      <div className="bottom-half" />

      {/* Floating rectangle */}
      <div className="floating-box">
        <div>
          <div className="top-buttons">
            <button
              onClick={() => openLink("https://github.com/cristinadobre92")}
            >
              github
            </button>
            <button
              onClick={() =>
                openLink("https://www.linkedin.com/in/cristina-dobre/")
              }
            >
              linkedin
            </button>
            <button
              onClick={() =>
                openLink("https://www.instagram.com/crisdobreart/")
              }
            >
              paintings
            </button>
            <button
              onClick={() =>
                openLink(
                  "https://www.goodreads.com/user/show/17373011-cristina-dobre"
                )
              }
            >
              books
            </button>
          </div>

          <div className="divider-line"></div>
        </div>
        <div>
          <div className="divider-line"></div>
          <div className="bottom-button">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleMouseEnter}
            >
              about me
            </button>
          </div>
        </div>
      </div>

      {/* Default welcome text - shown when no overlays are active */}
      {!showAboutText && (
        <div className="default-overlay">
          <img
            src={presentationImage}
            alt="Cristina's Presentation"
            className="presentation-image"
          />
        </div>
      )}

      {/* About me text overlay */}
      {showAboutText && (
        <div className={`about-overlay ${isExiting ? "exiting" : ""}`}>
          <div className="about-content">
            <img src={photo} alt="Cristina" className="profile-image" />
            <div className="about-text">
              living in benešov
              <br /> iOS dev, exploring react/react-native
              <br />
              native romanian, fluent english, conversational czech
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplitBackgroundPage;
