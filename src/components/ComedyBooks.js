import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComedyBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch Comedy books from the Django API
    axios.get('/api/comedy-books/')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Comedy Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComedyBooks;
