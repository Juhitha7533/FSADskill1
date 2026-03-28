import { useState, useEffect } from 'react';

export default function LocalUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/users.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading local users...</p>;
  if (error) return <p>Error loading local users: {error}</p>;

  return (
    <div>
      <h2>Local Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id} className="user-item">
            <strong>{u.name}</strong> &mdash; {u.email} &mdash; {u.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}