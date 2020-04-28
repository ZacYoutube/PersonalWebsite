import React, { Component } from 'react';
import '../component/css_doc/Footer.css';
import {Row,Col} from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <div className = 'footer-page'>
        <Row className = 'contact-footer'>
            <Col>
            <a href= 'mailto:zacyou151@yahoo.com?Subject=NewMail' target='_top'>
            <i class="mdi mdi-email" style = {{color:'white', fontSize:80}}></i>
            </a>
            <div><span><a href= 'mailto:zacyou151@yahoo.com?Subject=NewMail' target='_top'>zacyou151@yahoo.com</a></span></div>
            </Col>
            <Col>
            <a href = 'https://github.com/ZacYoutube' target='_blank'>
            <i class="mdi mdi-github-circle" style = {{color:'white', fontSize:80}}></i>
            </a>
            <div><span><a href = 'https://github.com/ZacYoutube' target='_blank'>ZacYoutube </a></span></div>
           
            </Col>
            <Col>
            <a href="tel:+16262615777">
            <i class="mdi mdi-phone" style = {{color:'white', fontSize:80}}></i>
            </a>
            <div><span><a href="tel:+16262615777">1(626)-261-5777</a></span></div>
            </Col>
            <Col>
            <a href = 'https://www.facebook.com/zac.you.10' target = '_blank'>
            <i class="mdi mdi-facebook-box"style = {{color:'white', fontSize:80}}></i>
            </a>
            <div><span><a href = 'https://www.facebook.com/zac.you.10' target = '_blank'>My Facebook</a></span></div>
            </Col>
        </Row>
        <div className = 'copyright-footer'>
            <span>© Copyright 2020 by<span style = {{color:'orange'}}> Zac You</span>. All rights reserved. </span>
        </div>
      </div>
    )
  }
}