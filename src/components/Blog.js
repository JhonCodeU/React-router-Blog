import React from 'react'
import posts from '../data/posts';
import { NavLink } from 'react-router-dom';
import Controles from './Controles';


const Blog = () => {

  return (
    <>
      <h2>Blog</h2>
      <p>Here are my blog posts:</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <NavLink to={`/post/${post.id}`}>
              {post.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Controles />
    </>
  );
}

export default Blog;