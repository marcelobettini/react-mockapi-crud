import React, { useContext } from 'react';
import { UserCtx } from '../context/UserContext';
import './UserList.css';
import Header from './Header';
import User from './User';
import Navbar from './Navbar';
function UsersList() {
  const { users, isLoading, error } = useContext(UserCtx);
  if (isLoading) return <div><h1>loading...</h1></div>;
  if (error) return <div><h1>{error}</h1></div>;
  return (
    <>
      <Header title={"Lista de usuarios"} />
      <section className='user-list-container'>
        {
          users?.map(u => <User key={u.id} user={u} />)
        }

      </section>
    </>
  );
}

export default UsersList;