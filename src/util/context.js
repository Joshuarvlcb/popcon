import React, { useState, useEffect, useContext } from "react";

const searchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const getSearch = (e) => setSearch(e.target.value);
  return (
    <searchContext.Provider value={{ search, getSearch }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(searchContext);
};
