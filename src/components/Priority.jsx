import React from "react";
import "../styles/KanbanContainer.css";
import TicketCard from "./TicketCard";

const KanbanContainer = ({ tickets, users }) => {
  // Filter tickets by priority
  const priorities = ["Urgent", "High", "Medium", "Low"];

  return (
    <div className="kanban-container">
      {priorities.map((priority) => (
        <div
          key={priority}
          className="tickets-container"
          data-priority={priority}
        >
          {tickets.filter((ticket) => ticket.priority === priority).length >
          0 ? (
            tickets
              .filter((ticket) => ticket.priority === priority)
              .map((ticket) => (
                <div className="ticket-card" key={ticket.id}>
                  <TicketCard ticket={ticket} user={users} />
                </div>
              ))
          ) : (
            <p>No tickets available.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default KanbanContainer;
