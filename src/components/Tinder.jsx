import React from 'react';
import Fade from 'react-reveal/Fade';
import Lottie from 'react-lottie';
import { Link } from 'gatsby';
import tinderLottie from '../static/tinder-lottie.json';

const Tinder = () => {
  return (
    <>
      <section id="tinder" >
          <Lottie
            options={{
              animationData: tinderLottie,
              autoplay: true
            }}
            height={600}
            style={{pointerEvents: 'none'}}
          />
          <Fade bottom duration={1000} delay={500} distance="30px">
            <div className="tinder-text-container">
              <h1>
                Just kidding
              </h1>
            </div>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
            <Link className="cta-btn cta-btn--hero" to="/">
                Go back
            </Link>
            </p>
          </Fade>
      </section>
    </>
  );
}

export default Tinder;
