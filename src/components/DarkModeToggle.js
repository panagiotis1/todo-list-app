import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a dark mode preference stored in local storage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode when isDarkMode changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }

    // Store the user's dark mode preference in local storage
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <input 
        type='checkbox' 
        id="darkmode-toggle" 
        onClick={toggleDarkMode}
        checked={isDarkMode}
        readOnly
      />
      <label className='label-darkmode' htmlFor="darkmode-toggle" />
    </>
  );
};

export default DarkModeToggle;
