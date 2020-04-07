import React, { Component } from 'react';
import './css_doc/Content.css';
import {Row,Col} from 'react-bootstrap';
import {Link,BrowserRouter} from 'react-router-dom';
import Project from './Project';
import {Animated} from "react-animated-css";

export default class Content extends Component {
  render() {
    return (
        <div className = "contents">
            
            <Row>
                <Col className = 'word'>
                    <div>
                        <h1>Hello, I'm Zac</h1>
                    </div>
                    <br/>
                    <div>
                        <p>A newly graduated computer programmer who is</p>
                        <p>facinated by the web development.</p>
                        <p>Currently based in Los Angeles, California, </p>
                        <p>looking to find a job in a modern tech company</p>
                    </div>
                    <br/>
                    <div>
                        <BrowserRouter>
                            <Link>
                                Check out my work!
                            </Link>
                        </BrowserRouter>
                    </div>
                </Col>
                <Col>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} animationInDelay={500}>
                        <div>
                            <img src={require('../asset/selfie.jpeg')} width = '300px'></img>
                        </div>
                    </Animated>
                </Col>
            </Row>

            
        </div>
            
       
    )
  }
}