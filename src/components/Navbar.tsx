import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo pdl10">My-TODO</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/">Задачки</NavLink></li>
            <li><NavLink to="/about">О нас</NavLink></li>
            <li><NavLink to="/javascript">JavaScript</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}


