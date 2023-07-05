import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const UserList = Loadable({
  loader: () => import('./components/UserList/UserList'),
  loading: LoadingSpinner,
});

const PostList = Loadable({
  loader: () => import('./components/PostList/PostList'),
  loading: LoadingSpinner,
});

const AlbumList = Loadable({
  loader: () => import('./components/AlbumList/AlbumList.js'),
  loading: LoadingSpinner,
});

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/posts/:userId" element={<PostList />} />
      <Route path="/albums/:userId" element={<AlbumList />} />
    </Routes>
  );
};

export default App;
