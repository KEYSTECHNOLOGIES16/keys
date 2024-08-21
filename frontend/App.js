import React from 'react';
import './App.css';
import logo from './KeysLogo.png';
import Circle from './Circle.png';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt='Keys'/>
          </div>
          <ul className="nav-links">
            <li>
              <button onClick={() => window.location.href = '#home'}>Home</button>
            </li>
            <li>
              <button onClick={() => window.location.href = '#about'}>About</button>
            </li>
            <li>
              <button onClick={() => window.location.href = '#academics'}>Academics</button>
            </li>
            <li>
              <button onClick={() => window.location.href = '#courses'}>Courses</button>
            </li>
            <li>
              <button onClick={() => window.location.href = '#placement'}>Placement and Training</button>
            </li>
          </ul>
          <button className="login-button"><b>Log In</b></button>
        </nav>
        <div className="main-content">
          <div className="cards-container">
            <Card>
              <h1>"Empowering Future Coders"</h1>
              <h2>"Learn. Code. Succeed."</h2>
              <div className="image-container">
                <img src={Circle} alt="Coding Illustration" />
              </div>
            </Card>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
