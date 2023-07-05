import { useContext } from "react";

import { UserCtx } from "./context/UserContext";
function App() {
  const { users, isLoading, error, setUsers } = useContext(UserCtx);

  if (isLoading) return <div><h1>loading...</h1></div>;
  if (error) return <div><h1>{error}</h1></div>;
  return (
    <>
      {
        users.map(u => <p key={u.id}>{u.name}</p>)

      }

    </>);
}

export default App;
