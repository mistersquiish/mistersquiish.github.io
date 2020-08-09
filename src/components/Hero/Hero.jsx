import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import tinder from '../../images/tinder.png';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  
  const { title, name, subtitle, cta, networks } = hero;

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
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, I\'m'}{' '}
            <span className="text-color-main">{name || "Henry Vuong"}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={750} distance="30px">
          
          <div className="hero-social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;

                if (name === "tinder") {
                  return(
                    <a
                    key={id}
                    href={url}
                    rel="noopener noreferrer"
                    aria-label={name}
                    >
                    <div class="icon-box">
                      <img class="icon-tinder" src={tinder}></img>
                    </div>
                    </a>
                  )
                } else {
                  return (
                    <a
                      key={id}
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                    </a>
                  );
                }
              })}
          </div>
        </Fade>
        
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
