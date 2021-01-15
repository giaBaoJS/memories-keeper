import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  
  return (
    <Fragment>
      <h1>POSTS</h1>
      <Post />
    </Fragment>
  );
};

export default Posts;
