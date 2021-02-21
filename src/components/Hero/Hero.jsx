import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Lottie from 'react-lottie';
import dogLottie from '../../static/dog-lottie.json';


const Header = () => {
  const { hero } = useContext(PortfolioContext);
  
  const { title, name, subtitle } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <div className="intro-container">
          <Lottie
            options={{
              animationData: dogLottie,
              autoplay: true
            }}
            height={400}
            style={{pointerEvents: 'none'}}
          />
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'Hi, I\'m'}{' '}
              <span className="text-color-main">{name || "Henry Vuong"}</span>
              <br />
              {subtitle}
            </h1>
          </Fade>
        </div>
        
        <span className="about-section">
          <Link to="about" smooth duration={1000}>
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
          </Link>
        </span>
      </Container>
    </section>
  );
};

export default Header;
