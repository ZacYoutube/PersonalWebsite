import React, { Component } from 'react'
import Toolbar from './Toolbar';
import './css_doc/Home.css';
import Content from './Content'
import Project from './Project';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
           <Toolbar/>
        </div>
        <div className = 'firstSection'>
          <Content/>
        </div>
        <div>
          <Project/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
  }
}