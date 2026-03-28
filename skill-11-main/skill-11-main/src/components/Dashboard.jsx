import { useState } from 'react';
import LocalUserList from './LocalUserList';
import UserList from './UserList';
import FakePostList from './FakePostList';

export default function Dashboard() {
  const [view, setView] = useState('');

  const renderSection = () => {
    switch (view) {
      case 'local':
        return <LocalUserList />;
      case 'api':
        return <UserList />;
      case 'fake':
        return <FakePostList />;
      default:
        return <p>Select a section above.</p>;
    }
  };

  return (
    <div className="dashboard">
      <h1>News Dashboard</h1>
      <div className="nav-buttons">
        <button onClick={() => setView('local')}>Local Users</button>
        <button onClick={() => setView('api')}>Users API</button>
        <button onClick={() => setView('fake')}>Fake API Posts</button>
      </div>
      <div className="content-section">{renderSection()}</div>
    </div>
  );
}