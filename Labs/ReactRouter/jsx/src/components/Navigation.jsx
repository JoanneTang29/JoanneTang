import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  // Step 1. console.log(props);
  return (
    <div className="ui secondary pointing menu">
      <Link
        className={`item ${props.location.pathname === '/' ? 'active' : ''}`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`item ${
          props.location.pathname === '/about' ? 'active' : ''
        }`}
        to="/about"
      >
        About
      </Link>
      <Link
        className={`item ${
          props.location.pathname === '/projects' ? 'active' : ''
        }`}
        to="/projects"
      >
        Projects
      </Link>
      <Link
        className={`item ${
          props.location.pathname === '/detail/:id' ? 'active' : ''
        }`}
        to="/detail/:id"
      >
        Detail
      </Link>
      <div className="right menu">
        <Link
          className={`ui item  ${
            props.location.pathname === '/logout' ? 'active' : ''
          }`}
          to="/logout"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
