import React from 'react';
import './User.css';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';

function User({ user }) {
  const navigate = useNavigate();
  const { createdAt, name, email, phone, id } = user;
  const handleUserClick = () => {
    navigate("/details", { state: { user } });
  };
  return (
    <article className='user-container' onClick={handleUserClick}>
      <div className="user-body">
        <h3>{name}</h3>
        <p>Correo E: {email}</p>
        <p>Teléfono: {phone}</p>
        <p>Fecha de alta: {formatDate(createdAt)}</p>
      </div>
    </article>
  );
}

export default User;