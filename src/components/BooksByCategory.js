// src/components/BooksByCategory.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/booksSlice'; // Adjust the import path

const BooksByCategory = ({ category }) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.items);

  useEffect(() => {
    dispatch(fetchBooks(category)); // Dispatch the fetchBooks action
  }, [dispatch, category]);

  return (
    <div>
      <h2>{category} Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BooksByCategory;
