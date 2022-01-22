import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='ui secondary pointing menu'>
      <NavLink to='/home' className='item'>
        Accordion
      </NavLink>
      <NavLink to='/search' className='item'>
        Search
      </NavLink>
      <NavLink to='/dropdown' className='item'>
        Dropdown
      </NavLink>
      <NavLink to='/translate' className='item'>
        Translate
      </NavLink>
    </div>
  );
};

export default Navbar;
