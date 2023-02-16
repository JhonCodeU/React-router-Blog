import React from 'react'

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <p>Here are my blog posts:</p>
      <ul>
        <li>
          <a href="/blog/first-post">First Post</a>
        </li>
        <li>
          <a href="/blog/second-post">Second Post</a>
        </li>
      </ul>
    </div>
  );
}

export default Blog;