import React, { useEffect, useState } from "react";
import axios from "axios";
import TicketCard from "./TicketCard";
import Dropdown from "./Dropdown";
import "../styles/KanbanBoard.css";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]); // Store ticket data
  const [users, setUsers] = useState([]); // Store user data
  const [sortOption, setSortOption] = useState(""); // For sorting

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        console.log("API Response:", response.data);

        const { tickets = [], users = [] } = response.data || {};

        setTickets(tickets);
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTickets([]);
        setUsers([]);
      });
  }, []);

  const sortTickets = (option) => {
    let sortedTickets = [...tickets];

    if (option === "priority") {
      sortedTickets.sort((a, b) => b.priority - a.priority);
    } else if (option === "title") {
      sortedTickets.sort((a, b) => a.title.localeCompare(b.title));
    }

    setTickets(sortedTickets);
  };

  return (
    <div className="kanban-board">
      <Dropdown
        sortOption={sortOption}
        setSortOption={setSortOption}
        onSort={sortTickets}
      />

      <div className="kanban-container">
        <div className="tickets-container">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} user={users} />
            ))
          ) : (
            <p>No tickets available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
