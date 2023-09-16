import React, { useState, useEffect, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal/Fade';
import ProjectCard from '../projects/ProjectCard';
import FallbackSpinner from '../helper/FallbackSpinner';
import { setProjects } from '../../profile/projects';
import img1 from "../../images/projects/dashboard-main.png";
import img2 from "../../images/projects/Walk2N.png";
import img3 from "../../images/projects/Krowd.png";
import img4 from "../../images/projects/examploreplus.png";

const styles = {
  containerStyle: {
    marginBottom: 25,
  }
};

const Projects = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(setProjects(img1, img2, img3, img4));
  }, []);

  return (
    <>
      <div />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data.projects?.map((project) => (
                  <Fade key={project.title}>
                    <ProjectCard project={project} />
                  </Fade>
                ))}
              </Row>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
};

export default Projects;
