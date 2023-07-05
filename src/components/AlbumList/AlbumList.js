import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const AlbumListContainer = styled.div`
  padding: 20px;
`;

const AlbumListItem = styled.li`
  margin-bottom: 10px;
`;

const AlbumTitle = styled.h3`
  color: #000;
`;

const AlbumList = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  const pageTitle = "Album page";
  const pageDescription = "Album list";
  
  return (
    <AlbumListContainer>
    <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
    </Helmet>

      <h1>Albums</h1>
      <Link to="/">Go to User List</Link>
      <ul>
        {albums.map(album => (
          <AlbumListItem key={album.id}>
            <AlbumTitle>{album.title}</AlbumTitle>
          </AlbumListItem>
        ))}
      </ul>
    </AlbumListContainer>
  );
};

export default AlbumList;
