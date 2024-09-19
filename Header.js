import React from 'react';

function Header() {
  return (
    <header>
      <nav className="navbar ">
        <div className="logo border12">
          <a href="soundofsilence.html" target="_parent">
            <img src="CRAFTY.png" className="mlogo" alt="Logo 1" />
          </a>
        </div>

        {/* Categories, search, deliver to, profile, cart, seller sections */}
        <div className="cata border12">
          <a href="categories.html" target="_blank">
            <i className="fa-solid fa-list" style={{ color: '#000000', margin: '10px' }} />
            <p style={{ fontSize: '21px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}>Categories</p>
          </a>
        </div>
        {/* ... other sections ... */}
      </nav>
    </header>
  );
}

export default Header;