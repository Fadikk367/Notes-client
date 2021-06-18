import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/subjects">Subjects</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;
