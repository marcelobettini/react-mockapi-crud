import React, { useContext } from 'react';
import { UserCtx } from '../context/UserContext';
import './UserList.css';
import User from './User';
function UsersList() {
  const { users, isLoading, error } = useContext(UserCtx);
  if (isLoading) return <div><h1>loading...</h1></div>;
  if (error) return <div><h1>{error}</h1></div>;
  return (
    <section className='user-list-container'>
      {
        users?.map(u => <User key={u.id} user={u} />)
      }

    </section>
  );
}

export default UsersList;