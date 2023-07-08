import React, { useContext } from 'react';
import { formatDate } from '../utils/formatDate';
import './UserForm.css';
import { deleteUserById } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { UserCtx } from '../context/UserContext';
function UserForm({ user }) {
  const { toggleReload } = useContext(UserCtx);

  const navigate = useNavigate();
  const handleDelete = async () => {
    await deleteUserById(user.id);
    toggleReload();
    navigate("/");
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
          <input type="text" id='created' value={formatDate(user.createdAt)} disabled />
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