import React, { useContext, useState } from 'react';
import { formatDate } from '../utils/formatDate';
import './UserForm.css';
import { deleteUserById, updateUserById } from '../services/userService';
import { useNavigate } from 'react-router-dom';
import { UserCtx } from '../context/UserContext';
function UserForm({ user }) {
  const [newUser, setNewUser] = useState(user);
  const { fetchData } = useContext(UserCtx);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    setNewUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserById(user.id, newUser);
    fetchData();
    navigate("/");
  };
  const handleDelete = async () => {
    await deleteUserById(user.id);
    fetchData();
    navigate("/");
  };

  return (
    <div className="form-container">
      <form className='user-form' onSubmit={handleSubmit}>
        <div className='form-data'>
          <p>ID: <span>{user.id}</span></p>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id='name' name='name' value={newUser.name} onChange={handleInputChange} />
          <label htmlFor="email">Correo:</label>
          <input type="text" id='email' name='email' value={newUser.email} onChange={handleInputChange} />
          <label htmlFor="phone">Teléfono:</label>
          <input type="text" id='phone' name='phone' value={newUser.phone} onChange={handleInputChange} />
          <label htmlFor="created">Fecha de alta:</label>
          <input type="text" id='created' name='createdAt' defaultValue={formatDate(newUser.createdAt)} disabled />
        </div>
        <div className="form-buttons">
          <input type="submit" value="editar" />
          <input type="button" value="eliminar" onClick={handleDelete} />
          <input type="button" value="cancelar" onClick={() => navigate("/")} />
        </div>
      </form>
    </div>
  );
}

export default UserForm;