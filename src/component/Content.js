import React, { Component } from 'react';
import './css_doc/Content.css';
import {Row,Col,Button} from 'react-bootstrap';
import {Link,BrowserRouter} from 'react-router-dom';
import Project from './Project';
import {Animated} from "react-animated-css";
import Container from 'react-bootstrap/Container'

export default class Content extends Component {
  render() {
    return (
        <div className = "contents">
                    <div className = 'content-header'>
                        <h1>Hi, I'm Zac You</h1>

                    </div>
                    <div className = 'content-description'>
                        <h4>A programmer who enjoys coding!</h4>
                    </div>
                    <br/>
                    <Container className = 'content-tool'>
                    <Row xs = {1} md = {2} style = {{width:'300px', margin: '0 auto'}}>
                        <Col>
                            <div>
                            <img src = {require('../asset/github-color.png')} width = '30' height='30'/>
                            </div>
                            <div>
                            <a href='https://github.com/ZacYoutube' target="_blank">Github</a>
                            </div>
                        </Col>
                        <Col>
                            <div>
                            <img src = {require('../asset/linkedin.png')} width = '30' height='30'/>
                            </div>
                            <div>
                            <a href='https://www.linkedin.com/feed/' target="_blank">LinkedIn</a>
                            </div>
                        </Col>
                        <Col>
                            <div>
                            <img src = {require('../asset/secured-letter.png')} width = '30' height='30'/>
                            </div>
                            <div>
                            <a href='mailto:zacyou151@yahoo.com?Subject=NewMail' target='_top'>Email</a>
                            </div>
                        </Col>
                    </Row>
                    </Container>
               
            
        </div>
            
       
    )
  }
}