import React from 'react';

const SearchClientStep = () => {
  return (
    <div>
      <h1>Search Client</h1>
      {/* Placeholder for autocomplete search input */}
      <input type="text" placeholder="Search for existing client..." />
      <button>Search</button>
      {/* Placeholder for fallback to create new client */}
      <p>Or</p>
      <button>Create New Client</button>
    </div>
  );
};

export default SearchClientStep; 