import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  function addUser(user) {
    setData((prev) => [...prev,user]);
  }

  return (
    <DataContext.Provider value={{ data, addUser }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = ()=> useContext(DataContext);