import React, { useEffect, useState, useContext } from 'react';
import { Chrono } from 'react-chrono';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import FallbackSpinner from '../helper/FallbackSpinner';
import '../../css/education.css';
import { setEd } from '../../profile/education';
import img1 from '../../images/education/UCLA_LOGO.png';
import img2 from '../../images/education/CSULA_LOGO.png';
import img3 from '../../images/education/MARKKEPPEL.png';
import '../../App.css';

function Education() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');
  const [mediaHeight, setMediaHeight] = useState(130);

  useEffect(() => {
    setData(setEd(img1, img2, img3));

    if (window?.innerWidth < 576) {
      setMode('VERTICAL');
    }

    if (window?.innerWidth < 576) {
      setWidth('90vw');
      setMediaHeight(90);
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
      setMediaHeight(100);
    } else {
      setWidth('50vw');
    }
  }, []);

  return (
    <>
      <br />
      <br />
      {data ? (
        <Fade>
          <div style={{ width: width }} className="section-content-container">
            <Container>
              <Chrono
                allowDynamicUpdate
                useReadMore={false}
                items={data}
                cardHeight={250}
                mode={mode}
                theme={{
                  primary: theme.accentColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  cardForeColor: theme.chronoTheme.cardForeColor,
                  titleColor: theme.chronoTheme.titleColor == 'black' ? 'white' : 'black',
                  titleColorActive: 'white'
                }}
                mediaSettings={{ align: 'center', fit: 'contain' }}
                mediaHeight={mediaHeight}
              >
                  <div className="chrono-icons">
                    {data.map((education) => (education.icon ? (
                      <img
                        key={education.icon.src}
                        src={education.icon.src}
                        alt={education.icon.alt}
                      />
                    ) : null))}
                </div>
              </Chrono>
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

export default Education;
