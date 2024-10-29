import React from "react";
import "../styles/TicketCard.css";
import icon from "../assets/SVG - Urgent Priority grey.svg";
const TicketCard = ({ ticket, user }) => {
  const { id, title, tag, assignedUserAvatar } = ticket;

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{id}</span>
        <div className="">
          {" "}
          {assignedUserAvatar && (
            <img src={assignedUserAvatar} alt="User" className="user-avatar" />
          )}
        </div>
      </div>
      <h3 className="ticket-title">{title}</h3>
      <div className="ticket-footer">
        <div className="ticket-badge2">
          <img src={icon} />
        </div>
        <div className="ticket-badge">
          <span>{tag}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
