import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className = "navbar navbar-expand-lg navbar-light bg-light">

      <div className = "navbar-brand">
          GitHub Поиск
      </div>
      
      <ul className = "navbar-nav">

          <li className = "nav-item">
              <NavLink exact to="/" className = "nav-link"> Главная </NavLink>
          </li>

          <li className = "nav-item">
              <NavLink to="/about" className = "nav-link"> Информация </NavLink>
          </li>

      </ul>
    </nav>
  )
