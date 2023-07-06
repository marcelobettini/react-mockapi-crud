import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function UserDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  if (!user) return (
    <>
      <h1>What R U doing here?</h1>
      <button onClick={() => navigate("/")}>go back</button>
    </>
  );
  return (
    <div><h2>UserDetails</h2>
      <p>{user.name}</p></div>
  );
}

export default UserDetails;