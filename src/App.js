import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TripProvider } from './context/TripContext';
import TripList from './components/TripList';
import TripDetails from './components/TripDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <TripProvider>
        <div className='App'>
          <Routes>
            <Route path='/' element={<TripList />} />
            <Route path='/trip/:id' element={<TripDetails />} />
          </Routes>
        </div>
      </TripProvider>
    </Router>
  );
};

export default App;
