import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import './BlogPost.css';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="blog-post">
      <Link to="/" className="back-link">← Back to all posts</Link>

      <article>
        <header className="post-header">
          <h1>{post.title}</h1>
          <time className="post-date">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <Link to="/" className="back-link-bottom">← Back to all posts</Link>
    </div>
  );
}

export default BlogPost;
