import React, { Component } from 'react';
import '../component/css_doc/Project.css';
import {Card,CardHeader,CardBody,CardFooter,CardImg,CardText} from 'reactstrap';
import {Row,Col,Button} from 'react-bootstrap';

export default class Project extends Component {
  render() {
    return (
      <div className = 'project-page'>
        <div>
          <h3 className = 'title'>My Projects</h3>
          <img className = 'title-leaf' src = {require('../asset/leaf-removebg-preview.png')}/>
          <div className = 'first-project'>
            
              <Card border="light" className = 'project-card'>
                <CardHeader className = 'card-header'>AWS Resources Monitoring Dashboard</CardHeader>
                <CardImg variant="top" src={require("../asset/dashboard-project.png")} width = '40' height = '200'/>
                <CardBody>
                  <span>
                    The AWS resource monitoring dashboard gets the data from AWS data sources such as AWS EC2
                    which passes to the CloudWatch, a service storing data sources, and displays the metrics data
                    in the format of graphs (either real time or static) and the logs status will be monitored 
                    on the system health bar.
                  </span>
                </CardBody>
                <Button href = 'http://ec2-54-219-129-59.us-west-1.compute.amazonaws.com:3000/login' className = 'view-button' style = {{backgroundColor:'#088A68',border:'none'}}>View</Button>
              </Card>
          </div>
          <div className='second-project'>

          <Card border="light" className = 'project-card'>
                <CardHeader className = 'card-header'>Krowd Attendance App</CardHeader>
                <CardImg variant="top" src={require("../asset/android-app-project.png")} width = '40' height = '200'/>
                <CardBody>
                  <span>
                    The Krowd attendance app is an android app that can help teachers manage the students' attendance
                    based on their physical location. It has a teacher page and also student page where the teachers and
                    students are able to create/delete, enroll/drop classes based on the class ID. The app would only allow 
                    students to take attendance when their current location is within 100 meters from the teacher's 
                    current location.
                  </span>
                </CardBody>
                <Button href = 'https://github.com/saboomayank/Krowd' className = 'view-button' style = {{backgroundColor:'#088A68',border:'none'}}>View</Button>
              </Card>
          </div>
          </div>
      </div>
    )
  }
}