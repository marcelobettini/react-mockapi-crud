import React from 'react';
import './User.css';

function User({ user }) {
  const { createdAt, name, email, phone, id } = user;
  return (
    <article className='user-container'>
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