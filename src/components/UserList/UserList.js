import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const UserListContainer = styled.div`
  padding: 20px;
`;

const UserListItem = styled.li`
  margin-bottom: 10px;
`;

const UserLink = styled(Link)`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SearchInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const SortSelect = styled.select`
  padding: 5px;
  margin-bottom: 10px;
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrderChange = event => {
    setSortOrder(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.username.localeCompare(b.username);
    } else {
      return b.username.localeCompare(a.username);
    }
  });
  const pageTitle = "User List";
  const pageDescription = "Browse the list of users";

  return (
    <UserListContainer>
    <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
    </Helmet>

      <h1>{pageTitle}</h1>
      <SearchInput type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by username" />
      <SortSelect value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Sort A-Z</option>
        <option value="desc">Sort Z-A</option>
      </SortSelect>
      <ul>
        {sortedUsers.map(user => (
          <UserListItem key={user.id}>
            <UserLink to={`/posts/${user.id}`}>{user.username}</UserLink> |{' '}
            <Link to={`/albums/${user.id}`}>Albums</Link>
          </UserListItem>
        ))}
      </ul>
    </UserListContainer>
  );
};

export default UserList;
