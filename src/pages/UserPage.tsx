import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import NestedList from '../components/NestedList';
import GridTable from '../components/GridTable';
import { Post, User } from '../types';

const UserPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const userFromLocalStorage = localStorage.getItem('user');
  const user: User = userFromLocalStorage
    ? JSON.parse(userFromLocalStorage)
    : null;

  const fetchData = async (): Promise<Post[]> => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      return data as Post[];
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetchData();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {user ? (
        <Box
          sx={{
            mx: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {posts && <GridTable posts={posts} />}
          <NestedList />
        </Box>
      ) : (
        <>
          {window.alert('Please fill all the details!')}
          <Navigate to="/" />
        </>
      )}
    </div>
  );
};

export default UserPage;
