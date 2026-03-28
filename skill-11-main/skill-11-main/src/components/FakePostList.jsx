import { useState, useEffect } from 'react';
import axios from 'axios';

export default function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  const fetchData = () => {
    setLoading(true);
    setError(null);

    axios
      .get('https://dummyjson.com/posts')
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Unknown');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  const filteredPosts =
    filter === 'all' ? posts : posts.filter((p) => String(p.userId) === filter);

  if (loading) return <p>Loading fake posts...</p>;
  if (error) return <p>Error loading posts: {error}</p>;

  return (
    <div>
      <h2>Fake API Posts</h2>
      <div className="controls">
        <label>
          Filter by userId:{' '}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            {[...new Set(posts.map((p) => p.userId))].map((uid) => (
              <option key={uid} value={uid}>{uid}</option>
            ))}
          </select>
        </label>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      <ul>
        {filteredPosts.map((p) => (
          <li key={p.id} className="post-item">
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}