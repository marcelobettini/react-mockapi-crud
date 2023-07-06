import { createContext, useState, useEffect } from "react";
import { getAllUsers } from "../services/userService";
import { initialUser } from "../services/initialUser";
export const UserCtx = createContext([initialUser]);

export const UserCtxProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const data = await getAllUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <UserCtx.Provider value={{ users, error, isLoading, setUsers }}>{children}</UserCtx.Provider>
  );
};
