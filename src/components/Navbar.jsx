import React from 'react';

const Navbar = () => (
  <nav className="navbar" style={{ color: '#DDE6ED', backgroundColor: '#27374D' }}>
    <h1>Math Magicians</h1>
    <ul className="navbar-list">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/calculator">Calculator</a>
      </li>
      <li>
        <a href="/quote">Quote</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
