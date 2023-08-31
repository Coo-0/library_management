import logo from './logo.svg';
import './App.css';
import React from 'react';
import SciFiBooks from './components/SciFiBooks';
import FictionBooks from './components/FictionBooks';
import ComedyBooks from './components/ComedyBooks';
import UserDashboard from './components/UserDashboard'; // Add this import
import AllBooksDashboard from './components/AllBooksDashboard'; 
import BooksByCategory from './components/BooksByCategory';
function App() {
  return (
    <div>
      <UserDashboard /> {/* Display UserDashboard */}
      <AllBooksDashboard /> {/* Display AllBooksDashboard */}
      <SciFiBooks />
      <FictionBooks />
      <ComedyBooks />
      <BooksByCategory category="Sci-Fi" />
        <BooksByCategory category="Fiction" />
        <BooksByCategory category="Comedy" />
    </div>
  );
}

export default App;
