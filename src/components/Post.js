import React from 'react'
import { useParams, Navigate } from 'react-router-dom';
import posts from '../data/posts';

const Post = () => {

  const { id } = useParams();
  const post = posts.find(post => post.id === Number(id));

  return (
    <>
      {post ?
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        :
        <Navigate replace to={'/'} />
      }
    </>
  );
}

export default Post;