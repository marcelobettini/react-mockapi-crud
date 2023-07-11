import React, { useContext, useState, useMemo } from 'react';
import { UserCtx } from '../context/UserContext';
import './UserList.css';
import Header from './Header';
import User from './User';
import Sort from './Sort';
import Search from './Search';
function UsersList() {
  const { users, isLoading, error } = useContext(UserCtx);
  const [sortOrder, setSortOrder] = useState('asc');
  const [queryString, setQueryString] = useState("");
  let sortedUsers = useMemo(() => {
    const clonedUsers = [...users];
    clonedUsers.sort((a, b) => {
      const compareResult = a.name.localeCompare(b.name); //1 or -1
      return sortOrder === 'asc' ? compareResult : -compareResult;
    });
    return clonedUsers.filter(user => user.name.toLocaleLowerCase().startsWith(queryString.toLocaleLowerCase()));
  }, [users, sortOrder, queryString]);


  const handleSortToggle = () => {
    console.log('toggle sort click');
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const handleQuery = (query) => {
    setQueryString(query);
  };


  if (isLoading) return <div><h1>loading...</h1></div>;
  if (error) return <div><h1>{error}</h1></div>;
  return (
    <>
      <Header title={"Lista de usuarios"} >
        <section className="controls-container">
          <Search queryString={queryString} onQuery={handleQuery} />
          <Sort sortOrder={sortOrder} onSort={handleSortToggle} />
        </section>
      </Header>
      <section className='user-list-container'>
        {sortedUsers.length ? sortedUsers.map(u => <User key={u.id} user={u} />) : <div><h2>No results...</h2></div>
        }

      </section>
    </>
  );
}
export default UsersList;