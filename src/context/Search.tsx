import React from "react";

const SearchContext = React.createContext(null);

interface SearchProviderProps {
  children: React.ReactNode;
}

const SearchProvider: React.FC<SearchProviderProps> = ({
  children,
}: SearchProviderProps) => {
  const [search, setSearch] = React.useState({
    query: "",
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
