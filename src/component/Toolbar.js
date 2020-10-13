import React, { Component } from 'react';
import {Link,BrowserRouter} from 'react-router-dom';
import './css_doc/Toolbar.css';

export default class Toolbar extends Component {
  constructor(){
    super();
    this.navListener = this.navListener.bind(this);
  }
  componentDidMount(){
    this.navListener();
  }
  componentWillUnmount(){
    this.navListener();
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
      <div>
        
          <nav className = 'toolbar_nav'>
           <div className = 'logo'>
             <img style = {{paddingRight:5}} src = {require('../asset/Zlogos.png')} width='40' height='35'/>
             <span style = {{color:'#004F87'}}>ac</span>
             <img style = {{paddingRight:5}} src = {require('../asset/yyy-removebg-preview (1).png')} width='40' height='35'/>
             <span style = {{color:'#67A7DC'}}>ou</span>
           </div>
            
              <ul className = 'toolbar_selection'>
                <li>
                 <i class = 'mdi mdi-home' style={{color:'white',fontSize:'medium',paddingRight:'2px'}}></i><a href='/home'>Home</a>
                </li>
                <li>
                  <i class ='mdi mdi-account-box' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i><a href='/home#about'>About</a>
                </li>
                <li>
                <i class ='mdi mdi-apps' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i><a href='/home#project'>Project</a>
                </li>
                <li>
                <i class ='mdi mdi-file-document' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i><a href='/home#resume'>Resume</a>
                </li> 
                <li>
                <i class ='mdi mdi-phone-classic' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i><a href='/home#footer'>Contact</a>
                </li>
              </ul>
              
             
         
          <div className = 'burger'>
                <div className ='line_one'></div>
                <div className ='line_two'></div>
                <div className ='line_three'></div>

              </div>
  
          </nav>
         

          </div>   
               
    )
  }
}