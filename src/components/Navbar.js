import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Navbar = (props) => {
  const setThemeColor = (event) => {
    props.setThemeColor(event.currentTarget.getAttribute('value'))
  }


  return (
    <nav className={`navbar navbar-expand-lg border-bottom navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.aboutus}</a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Apply Themes
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a onClick={setThemeColor} value={'dark'} className="dropdown-item" href="#">Dark</a></li>
                    <li><a onClick={setThemeColor} value={'light'} className="dropdown-item" href="#">Light</a></li>
                    <li><a onClick={setThemeColor} value={'blue'} className="dropdown-item" href="#">Blue</a></li>
                    <li><a onClick={setThemeColor} value={'indigo'} className="dropdown-item" href="#">Indigo</a></li>
                  </ul>
                </li>
              </ul>

              <div className={`form-check form-switch text-${ props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${ props.mode === 'light' ? 'dark' : 'light'} Mode`}</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar

Navbar.propTypes = {
    title: PropTypes.string,
    aboutus: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'test123',
    aboutus: ''
}
