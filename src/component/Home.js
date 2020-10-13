import React, { Component } from 'react'
import Toolbar from './Toolbar';
import './css_doc/Home.css';
import './css_doc/Toolbar.css';
import Content from './Content'
import Project from './Project';
import About from './About';
import Footer from './Footer';
import pdf_file from '../files/Resume Zac You.pdf'
import {Button,Row,Col} from 'react-bootstrap';


export default class Home extends Component {
  constructor(){
    super();
    this.windowScroll = this.windowScroll.bind(this);
    this.navListener = this.navListener.bind(this);
  }
  componentDidMount(){
      this.navListener();
      this.windowScroll(); 
    
  }
  componentWillUnmount(){
    this.navListener();
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
  navListener(){
   
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.toolbar_selection');
      const navLi = document.querySelectorAll('.toolbar_selection li');
      burger.addEventListener('click',()=>{
          nav.classList.toggle('nav-act');
          burger.classList.toggle('close');
      })
      navLi.forEach((item,i)=>{
        item.style.animation = `navLi 0.5s ease-in forwards ${i/7 + 1}s`;
        item.addEventListener('click',()=>{
          nav.classList.toggle('nav-act');
          burger.classList.toggle('close');
        })
      })
    
    
  }
  render() {
    return (
     
    
      
          <div id = 'home-div' className = 'home'>
             <nav className = 'toolbar_nav'>
           <div className = 'logo'>
             <img style = {{paddingRight:5}} src = {require('../asset/Zlogos.png')} width='40' height='35'/>
             <span style = {{color:'#004F87'}}>ac</span>
             <img style = {{paddingRight:5}} src = {require('../asset/yyy-removebg-preview (1).png')} width='40' height='35'/>
             <span style = {{color:'#67A7DC'}}>ou</span>
           </div>
            
              <ul className = 'toolbar_selection'>
                <li>
                 <i class = 'mdi mdi-home' style={{color:'white',fontSize:'medium',paddingRight:'2px'}}></i><a href='#main'>Home</a>
                </li>
                <li>
                  <i class ='mdi mdi-account-box' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i><a href='#about'>About</a>
                </li>
                <li>
                <i class ='mdi mdi-apps' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i><a href='#project'>Project</a>
                </li>
                <li>
                <i class ='mdi mdi-file-document' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i><a href='#resume'>Resume</a>
                </li> 
                <li>
                <i class ='mdi mdi-phone-classic' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i><a href='#footer'>Contact</a>
                </li>
              </ul>
              
             
         
          <div className = 'burger'>
                <div className ='line_one'></div>
                <div className ='line_two'></div>
                <div className ='line_three'></div>

              </div>
  
          </nav>
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
            <img className = 'resume-2' src = {require('../files/Resume Zac You-1.png')} width = '45%' height = '800px'/>
            
          
        </div>
        <div className = 'download-button'>
          <Button href = {pdf_file} download = 'Resume Zac You.pdf' style = {{backgroundColor: '#088A68', border:'none'}}>Download My Resume</Button>
        </div>
        <div id = 'footer'>
          <Footer/>
        </div>
      </div>
  
  
       
  
     
    )
  }
}