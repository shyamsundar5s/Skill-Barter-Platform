import React, { useState, useEffect } from "react";
import MatchList from "./components/MatchList";

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch("/api/matches/USER_ID");
      const data = await response.json();
      setMatches(data);
    };

    fetchMatches();
  }, []);

  return (
    <div className="App">
      <h1>Skill Barter Platform</h1>
      <MatchList matches={matches} />
    </div>
  );
}

export default App;
