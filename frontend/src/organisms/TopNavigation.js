import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import { Link, NavLink } from 'src/atoms/';
import { route, PRACTICALS } from 'src/Routes';

export function TopNavigation() {
  return (
    <nav className="flex justify-between bb b--white-10 bg-dark-green white">
      <Link
        to={route.home()}
        noUnderline
        className="b white flex items-center pv2 ph3"
      >
        <FontAwesomeIcon icon={faFeatherAlt} className="mr2 f4" />
        Quacker
      </Link>
      <div className="flex-grow flex items-center">
        <NavLink exact to={route.home()} className="pa3">
          Home
        </NavLink>
        {PRACTICALS.map(({ id }) => (
          <NavLink to={route.practical(id)} className="pa3" key={id}>
            {id}
          </NavLink>
        ))}
        <NavLink to={route.about()} className="pa3">
          About
        </NavLink>
      </div>
    </nav>
  );
}
