// src/components/AllBooksDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllBooksDashboard = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // Fetch all books from the Django API
    axios.get('/api/all-books/')
      .then(response => {
        setAllBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {allBooks.map(book => (
          <li key={book.id}>{book.title} ({book.category})</li>
        ))}
      </ul>
    </div>
  );
};

export default AllBooksDashboard;
