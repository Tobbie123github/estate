import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User signed out successfully.');
        navigate('/login'); // Redirect to login page or another page after logout
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
      });
  };

  return (
    <button className='border-2 text-violet-800  px-4 py-3 rounded-lg hover:bg-violet-300 hover:text-white transition' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
