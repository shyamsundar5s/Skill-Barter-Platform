import React from "react";

const MatchList = ({ matches }) => {
  return (
    <div>
      <h2>Matched Users</h2>
      {matches.map((match) => (
        <div key={match._id} className="match-card">
          <h3>{match.name}</h3>
          <p>Skills Offered: {match.skillsOffered.join(", ")}</p>
          <p>Skills Wanted: {match.skillsWanted.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
