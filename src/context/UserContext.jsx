import { createContext, useState, useEffect, useCallback } from "react";
import { getAllUsers } from "../services/userService";
import { initialUser } from "../services/initialUser";
export const UserCtx = createContext([initialUser]);

export const UserCtxProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //useCallback: the same function instance is used across renders, optimizing performance by avoiding unnecessary re-creations of the function. This is the key concept behind memoization.
  const fetchData = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserCtx.Provider value={{ users, error, isLoading, setUsers, fetchData }}>{children}</UserCtx.Provider>
  );
};
