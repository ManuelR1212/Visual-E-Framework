import React, {useState, useEffect, useRef} from 'react';

const Navbar = () => {

  const handleClickOutsided = (event) => {
    if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
      setSidenavActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsided);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsided);
    };
  }, []);


    return (
      <>

      </>
    );
  }

  export default Navbar;
  