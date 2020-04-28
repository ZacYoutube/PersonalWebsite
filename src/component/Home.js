import React, { Component } from 'react'
import Toolbar from './Toolbar';
import './css_doc/Home.css';
import Content from './Content'
import Project from './Project';
import About from './About';
import Footer from './Footer';

import {Button,Row,Col} from 'react-bootstrap';


export default class Home extends Component {
  constructor(){
    super();
    this.windowScroll = this.windowScroll.bind(this);
  }
  componentDidMount(){
    this.windowScroll();
  }
  windowScroll(){
    let main = document.getElementById('main');
    let about = document.getElementById('about');
    let project = document.getElementById('project');
    window.onscroll = function(){
      console.log(window.innerWidth)
      let distanceToTop = document.documentElement.scrollTop;
      main.style.opacity = 1 - distanceToTop/1000;
      if(window.getComputedStyle(main).getPropertyValue("opacity") < 0.2){
        about.style.opacity = 1 - (distanceToTop/(window.innerWidth<1200?2150:1200) - 0.7)
        
      }
      if(window.getComputedStyle(about).getPropertyValue("opacity")< 0.3){
       
        project.style.opacity = 1 - (distanceToTop/(window.innerWidth<=1200?2800:2000) - 0.9 )
      }
      // console.log(window.getComputedStyle(about).getPropertyValue("opacity"))
    
    }

  }
  render() {
    return (
      <div className = 'home'>
        <Toolbar/>
        <div id = 'main' className = 'first-section'>
          <Content/>
          <Row className = 'buttons' >
            <Col>
              <div className = 'check-out'>
              <a className = 'check-out-button' href = '#about'>
                Learn About Me!
              </a>         
            </div>
            </Col>
            <Col>
              <div className = 'check-more'>
                <a className = 'check-more-button' href = '#project'>
                  See My Project!
                </a>         
              </div>
            </Col>
          </Row>
          
          <div class="arrow bounce"> 
            <a className = 'fa fa-angle-double-down fa-4x' href = '#about'/>
         </div>

        </div>

        <div id = 'about' className = 'second-section'>
          <About/>
        </div>

        <div id = 'project'>
          <Project/>
        </div>
        <div id = 'resume' className = 'resume-container'>
            <h3 style = {{marginBottom:'5%'}} className = 'title'>My Resume</h3>
            <img className = 'title-decor' src = {require('../asset/leaf-removebg-preview.png')}/>
            <br/>
            <img className = 'resume-2' src = {require('../files/resume1.png')} width = '45%' height = '800px'/>
            <img className = 'resume-1' src = {require('../files/resume2.png')} width = '45%' height = '800px'/>

          
        </div>
        <div id = 'footer'>
          <Footer/>
        </div>
      </div>
    )
  }
}