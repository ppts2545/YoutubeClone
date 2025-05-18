import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="logo">YouTube</div>
        <input type="text" placeholder="Search" />
        <div className="user-icon">👤</div>
      </header>

      <div className="container">
        <nav className="sidebar">
          <ul>
            <li>Home</li>
            <li>Trending</li>
            <li>Subscriptions</li>
            <li>Library</li>
            <li>History</li>
          </ul>
        </nav>

        <main className="videos">
          <div className="video-card">
            <img src="https://via.placeholder.com/300x180" alt="Thumbnail" />
            <h3>Video Title 1</h3>
          </div>
          <div className="video-card">
            <img src="https://via.placeholder.com/300x180" alt="Thumbnail" />
            <h3>Video Title 2</h3>
          </div>
          <div className="video-card">
            <img src="https://via.placeholder.com/300x180" alt="Thumbnail" />
            <h3>Video Title 3</h3>
          </div>
          <div className="video-card">
            <img src="https://via.placeholder.com/300x180" alt="Thumbnail" />
            <h3>Video Title 4</h3>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
