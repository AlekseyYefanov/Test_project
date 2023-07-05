import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const PostListContainer = styled.div`
  padding: 20px;
`;

const PostListItem = styled.li`
  margin-bottom: 10px;
`;

const PostTitle = styled.h3`
  color: #000;
`;

const PostBody = styled.p`
  color: #555;
`;


const PostList = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [userId]);

  const pageTitle = "Post List";
  const pageDescription = "Post list of users";

  return (
    <PostListContainer>
    <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
    </Helmet>

      <h1>Posts</h1>
      <Link to="/">Go to User List</Link>
      <ul>
        {posts.map(post => (
          <PostListItem key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
          </PostListItem>
        ))}
      </ul>
    </PostListContainer>
  );
};

export default PostList;
