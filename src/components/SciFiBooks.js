// src/components/SciFiBooks.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SciFiBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch Sci-Fi books from the Django API
    axios.get('/api/sci-fi-books/')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Sci-Fi Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SciFiBooks;
