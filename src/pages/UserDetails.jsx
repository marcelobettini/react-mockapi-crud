import React, { useEffect } from 'react';
import { useLocation, useNavigate, redirect } from 'react-router-dom';
import Header from '../componets/Header';
import UserForm from '../componets/UserForm';

function UserDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);


  // return (
  //   <div>
  //     <h1>What R U doing here?</h1>
  //     <button onClick={() => navigate("/")}>go back</button>
  //   </div>
  // );
  return user && (
    <>
      <Header title={"Detalles de usuario"} />
      <UserForm user={user} />
    </>
  );
}

export default UserDetails;