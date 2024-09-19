import React from 'react';

function Categories() {
  return (
    <section className="categories">
      <div className="category category-box">
        <a href="jewelry.html">
          <img src="https://i.etsystatic.com/17719287/r/il/411e0a/2504474000/il_680x540.2504474000_3nqj.jpg" alt="Accessories" />
          <p>Accessories</p>
        </a>
      </div>
      {/* ... other category boxes ... */}
    </section>
  );
}

export default Categories;