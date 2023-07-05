import { createContext, useState, useEffect } from "react";
export const initialUser = {
  createdAt: "",
  name: "",
  email: "",
  phone: "",
  id: ""

};
export const UserCtx = createContext([initialUser]);

export const UserCtxProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getAllUsers = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const res = await fetch(
          "https://647a6c1bd2e5b6101db05747.mockapi.io/users",
          { signal } //pass the signal to fetch request
        );
        if (!res.ok) throw new Error("Response not ok");
        const data = await res.json();

        if (!signal.aborted) { //check if operation was aborted
          setUsers(data);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
        setIsLoading(false);
      }
    };
    const data = getAllUsers();
  }, []);
  return (
    <UserCtx.Provider value={{ users, error, isLoading, setUsers }}>{children}</UserCtx.Provider>
  );
};
