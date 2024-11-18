import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center mt-5">
    <h1>Welcome to the MERN Auth System</h1>
    <Link to="/signin" className="btn btn-primary mx-2">Sign In</Link>
    <Link to="/signup" className="btn btn-secondary mx-2">Sign Up</Link>
  </div>
);

export default Home;
