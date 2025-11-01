import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';
import './BlogList.css';

function BlogList() {
  return (
    <div className="blog-list">
      <header className="blog-header">
        <h1>Kevin Zhang</h1>
        <p className="tagline">Software Developer & Tech Enthusiast</p>
      </header>

      <div className="posts-container">
        {blogPosts.map(post => (
          <article key={post.id} className="post-preview">
            <Link to={`/post/${post.id}`} className="post-link">
              <h2>{post.title}</h2>
              <time className="post-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <p className="post-excerpt">{post.excerpt}</p>
              <span className="read-more">Read more →</span>
            </Link>
          </article>
        ))}
      </div>

      <footer className="blog-footer">
        <p>&copy; 2025 Kevin Zhang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BlogList;
