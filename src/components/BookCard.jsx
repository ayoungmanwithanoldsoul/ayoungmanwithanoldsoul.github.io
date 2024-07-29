import React from 'react';
import ".././styles/BookCard.css" ;

const BookCard = ({ imageSrc, title, author }) => {
    return (
      <div className="book-card">
        <img src={imageSrc} alt={title} className="book-image" />
        <div className="book-info">
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
        </div>
      </div>
    );
  };

export default BookCard;
