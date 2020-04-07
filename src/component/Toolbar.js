import React, { Component } from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import './css_doc/Toolbar.css';

export default class Toolbar extends Component {
  render() {
    return (
      <header className = 'toolbar'>
          <BrowserRouter>
          <nav className = 'toolbar_nav'>
            <div className = 'space'/>
            <div className = 'toolbar_selection'>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Resume</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
             
          </div>
  
          </nav>        
          </BrowserRouter>
      </header>
    )
  }
}