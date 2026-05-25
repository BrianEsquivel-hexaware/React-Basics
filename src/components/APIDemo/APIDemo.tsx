import { useState, useEffect } from 'react';
import './APIDemo.css';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function APIDemo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [postCount, setPostCount] = useState(3);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError('');
        
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${postCount}`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [postCount]);

  return (
    <div className="api-demo">
      <h4>Interactive API Consumption Example</h4>
      <p className="demo-description">
        This example fetches posts from JSONPlaceholder API. Try changing the count:
      </p>

      <div className="api-controls">
        <label htmlFor="post-count">Posts to load:</label>
        <select
          id="post-count"
          value={postCount}
          onChange={(e) => setPostCount(Number(e.target.value))}
        >
          <option value={3}>3 Posts</option>
          <option value={6}>6 Posts</option>
          <option value={10}>10 Posts</option>
        </select>
      </div>

      {loading && (
        <div className="api-loading">
          <div className="api-spinner"></div>
          <p>Fetching posts from API...</p>
        </div>
      )}

      {error && (
        <div className="api-error">
          <p>⚠️ {error}</p>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <h5>Post #{post.id}</h5>
                <span className="user-id">User {post.userId}</span>
              </div>
              <h6>{post.title}</h6>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="api-empty">
          <p>No posts loaded yet.</p>
        </div>
      )}
    </div>
  );
}

export default APIDemo;
