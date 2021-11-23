import React, { useState, useEffect, useContext } from "react";

const searchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const [loader, setLoader] = useState(true);
  const toggleLoader = (toggle) => {
    setLoader(toggle);
  };
  const getUrl = () => {
    setUrl(new URLSearchParams(window.location.search).get("id"));
  };
  const getSearch = (e) => setSearch(e.target.value);
  return (
    <searchContext.Provider
      value={{ search, getSearch, url, getUrl, toggleLoader, loader }}
    >
      {children}
    </searchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(searchContext);
};
