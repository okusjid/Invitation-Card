import React, { useState } from "react";
import "./InvitationCard.css";
import cardImage from "../assets/Card.png"; // Make sure to import your image

function InvitationCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false); // New state for tracking acceptance
  const [isDeclined, setIsDeclined] = useState(false); // New state for tracking decline
  const [declineButtonPosition, setDeclineButtonPosition] = useState({
    left: "50%",
    top: "70%",
  });

  const handleCardClick = () => {
    setIsOpen(true);
  };

  const handleAccept = () => {
    setIsAccepted(true); // Set the state to accepted
  };

  const handleDeclineHover = () => {
    const randomX = Math.floor(Math.random() * 80); // Random position between 0% and 80%
    const randomY = Math.floor(Math.random() * 80); // Random position between 0% and 80%
    setDeclineButtonPosition({ left: `${randomX}%`, top: `${randomY}%` });
  };

  const handleDeclineClick = () => {
    setIsDeclined(true); // Set the state to declined
  };

  return (
    <div
      className={`card-wrapper ${isOpen ? "open" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card">
        <div className="card-front">
          <img src={cardImage} alt="Card" className="card-image" />
        </div>
        <div className="card-inside">
          {!isAccepted && !isDeclined ? (
            <>
              <h1>Invitation to Dinner</h1>
              <p>
                Hey Captain, We're excited to invite you to a delightful evening
                filled with great food, laughter, and good company. Your
                presence would truly make it a night to remember!
              </p>
              <div className="button-container">
                <button className="accept-button" onClick={handleAccept}>
                  Accept
                </button>
                <button
                  className="decline-button"
                  onClick={handleDeclineClick} // Handle decline click
                  onMouseEnter={handleDeclineHover} // Handle decline hover
                  style={declineButtonPosition}
                >
                  Decline
                </button>
              </div>
            </>
          ) : isAccepted ? (
            <div className="cute-message">
              <h1>Yay! 🎉</h1>
              <p>We can't wait to enjoy a delightful dinner with you! 🍽️</p>
              <p>Your presence will make it even more special! 😊</p>
            </div>
          ) : (
            <div className="cute-message cute-message-decline">
              <h1>Next Dinner on Your Behalf!</h1>
              <p>We'll make sure it's a special one! 😄</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;
