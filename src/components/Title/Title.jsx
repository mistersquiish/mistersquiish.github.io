import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Menu from '../Menu';

const Title = ({ title }) => (
  <div>
  <Menu />
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 className="section-title">{title}</h2>
    </Fade>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
