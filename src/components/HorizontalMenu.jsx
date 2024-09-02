import React from 'react';
import { Link } from 'react-router-dom';

const HorizontalMenu = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md"
            activeClassName="bg-blue-800"
            exact
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/students"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md"
            activeClassName="bg-blue-800"
          >
            Students
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md"
            activeClassName="bg-blue-800"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
