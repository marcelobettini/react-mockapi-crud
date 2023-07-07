import React from 'react';
import './UserForm.css';

function UserForm({ user }) {
  return (
    <form className='user-form'>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id='name' value={user.name} />
      <label htmlFor="email">Correo:</label>
      <input type="text" id='email' value={user.email} />
      <label htmlFor="phone">Teléfono:</label>
      <input type="text" id='phone' value={user.phone} />
      <label htmlFor="created">Fecha de alta:</label>
      <input type="text" id='created' value={user.createdAt} />
      <input type="submit" value="editar" />
      <input type="button" value="eliminar" />
      <input type="button" value="cancelar" />
    </form>
  );
}

export default UserForm;