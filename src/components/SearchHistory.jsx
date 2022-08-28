import React from "react";

const SearchHistory = ({ terms }) => {
  return (
    <ul>
      {terms.map((term, idx) => (
        <li key={idx}>{term}</li>
      ))}
    </ul>
  );
};

export default SearchHistory;
