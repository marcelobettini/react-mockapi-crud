import React from 'react';
import './UserForm.css';
import { deleteUserById } from '../services/userService';
function UserForm({ user }) {
  const handleDelete = () => {
    deleteUserById(user.id);
  };

  return (
    <div className="form-container">
      <form className='user-form'>
        <div className='form-data'>
          <p>ID: <span>{user.id}</span></p>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id='name' value={user.name} />
          <label htmlFor="email">Correo:</label>
          <input type="text" id='email' value={user.email} />
          <label htmlFor="phone">Teléfono:</label>
          <input type="text" id='phone' value={user.phone} />
          <label htmlFor="created">Fecha de alta:</label>
          <input type="text" id='created' value={user.createdAt} />
        </div>
        <div className="form-buttons">
          <input type="submit" value="editar" />
          <input type="button" value="eliminar" onClick={handleDelete} />
          <input type="button" value="cancelar" />
        </div>
      </form>
    </div>
  );
}

export default UserForm;