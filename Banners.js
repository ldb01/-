import React from 'react';

function Banners() {
  return (
    <section className="banners">
      <div className="banner">
        <a href="vyg.html" target="_blank">
          <img src="1.png" alt="Banner 1" />
        </a>
        <h2>Banner 1 Title</h2>
        <p>Banner 1 Description</p>
      </div>
      <div className="banner">
        <a href="craftysellers.html" target="_blank">
          <img src="2.png" alt="Banner 2" />
        </a>
        <h2>Banner 2 Title</h2>
        <p>Banner 2 Description</p>
      </div>
    </section>
  );
}

export default Banners;