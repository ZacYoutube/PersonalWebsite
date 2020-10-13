import React, { Component } from 'react';
import '../component/css_doc/About.css';
import {Row,Col} from 'react-bootstrap';

export default class About extends Component {
  constructor(){
      super();
      this.windowScroll = this.windowScroll.bind(this);
    }
    componentDidMount(){
      this.windowScroll();
    }
    windowScroll(){
        console.log('im inside')
      let about = document.getElementById('about');
      about.onscroll = function(){
        about.style.opacity = 1 - document.documentElement.scrollTop/1000;
        console.log('im inside scroll');
      }
    }
  
  render() {
    return (
      <div className = 'about'>
          {/* <Row> */}
           
            <div className='about-me-intro'>
                <div>
                <h3>My motto</h3>
                </div>
                <div>
                    <span>“It doesn’t matter who you are, where you come from. The ability to triumph begins with you. Always.” –Oprah Winfrey</span>
                </div>
                <br/>
                <div>
                    <img src = {require('../asset/about-pic.jpeg')} width = '100%' height ='80%'/>
                </div>
            </div>

            <div className = 'about-me-body'>
                <div className = 'about-me-title'>
                <h3>About me</h3>
                </div>
                <div className = 'bio'>
                <span>
                    My name is Zac You. I came from China. Immigrated to the United States seven years ago, I am the first generation in my family who goes
                    to college. There are many obstacles that I have encountered, but none of them can stop me from moving forward. As my motto says, no matter
                    of who I am and no matter of where I came from, my ability to succeed always lies in my hand. My major is Computer 
                    Science, and I attended California State University, Los Angeles as my undergraduate. Currently, I am based in Los Angeles, and I 
                    am excited to explore more and learn more as I go. 
                </span>
                <Row>
                    <Col>
                        <div>
                        <img className = 'first-leaf' src = {require('../asset/leaf1-removebg-preview.png')} width={window.innerWidth/10} height = {window.innerHeight/3}/>
                        </div>
                    </Col>
                    <Col>
                    <div>
                    <img className = 'second-leaf' src = {require('../asset/leaf1-removebg-preview.png')} width={window.innerWidth/10} height = {window.innerHeight/3}/>
                    </div>
                    </Col>
                </Row>
                
              
                </div>
            </div>
            
          
         
          {/* </Row> */}
      </div>
    )
  }
}