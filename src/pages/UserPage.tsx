import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import NestedList from '../components/NestedList';
import GridTable from '../components/GridTable';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  name: string;
  email: string;
  phone: string;
}

const UserPage: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', email: '', phone: '' });
  const [posts, setPosts] = useState<Post[]>([]);

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
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    } else {
      window.alert('Please fill all the details!');
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetchData();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Box>
      {posts && <GridTable posts={posts} />}
      <NestedList />
    </Box>
  );
};

export default UserPage;
