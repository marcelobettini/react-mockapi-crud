import React from 'react';
import './User.css';
import { useNavigate } from 'react-router-dom';

function User({ user }) {
  const navigate = useNavigate();
  const { createdAt, name, email, phone, id } = user;
  const handleUserClick = () => {
    console.log(user);
    navigate("/details", { state: { user } });
  };
  return (
    <article className='user-container' onClick={handleUserClick}>
      <div className="user-body">
        <h3>{name}</h3>
        <p>Correo E: {email}</p>
        <p>Teléfono: {phone}</p>
        <p>Fecha de alta: {new Date(createdAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
    </article>
  );
}

export default User;