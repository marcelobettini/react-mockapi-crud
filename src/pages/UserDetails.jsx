import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../componets/Header';
import UserForm from '../componets/UserForm';

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
    <>
      <Header title={"Detalles de usuario"} />
      <UserForm user={user} />



    </>
  );
}

export default UserDetails;