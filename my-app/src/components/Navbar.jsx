import React from 'react'
import '../css/Navbar.css'

function Navbar() {
  return (
    <>
    <nav>
    <div className="logo">CodingNepal</div>
    <label htmlFor="btn" className="icon">
      <span className="fa fa-bars" />
    </label>
    <input type="checkbox" id="btn" />
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <label htmlFor="btn-1" className="show">
          Features +
        </label>
        <a href="#">Features</a>
        <input type="checkbox" id="btn-1" />
        <ul>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Elements</a>
          </li>
          <li>
            <a href="#">Icons</a>
          </li>
        </ul>
      </li>
      <li>
        <label htmlFor="btn-2" className="show">
          Services +
        </label>
        <a href="#">Services</a>
        <input type="checkbox" id="btn-2" />
        <ul>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="#">App Design</a>
          </li>
          <li>
            <label htmlFor="btn-3" className="show">
              More +
            </label>
            <a href="#">
              More <span className="fa fa-plus" />
            </a>
            <input type="checkbox" id="btn-3" />
            <ul>
              <li>
                <a href="#">Submenu-1</a>
              </li>
              <li>
                <a href="#">Submenu-2</a>
              </li>
              <li>
                <a href="#">Submenu-3</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Portfolio</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
    </>
  )
}

export default Navbar