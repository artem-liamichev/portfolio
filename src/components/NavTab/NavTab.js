import React from 'react';

function NavTab() {

  return (
    <nav>
        <ul className='navtab list'>
            <li className='list-item'>
              <a className="navtab__link link" href='#portfolio'>Projects</a>
            </li>
            <li className='list-item'>
              <a className="navtab__link link" href="#techs">Tech stack</a>
            </li>
            <li className='list-item'>
              <a className="navtab__link link" href="#student">About me</a>
            </li>
        </ul>
    </nav>  );
}

export default NavTab;
