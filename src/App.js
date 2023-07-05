import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

const UserList = loadable(() => import('./components/UserList/UserList'), {
  fallback: LoadingSpinner,
});

const PostList = loadable(() => import('./components/PostList/PostList'), {
  fallback: LoadingSpinner,
});

const AlbumList = loadable(() => import('./components/AlbumList/AlbumList.js'), {
  fallback: LoadingSpinner,
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
