import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import tinder from '../../images/tinder.png';

const Footer = ({footerMessage}) => {
  const { footer } = useContext(PortfolioContext);

  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <div className="social-links">
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
                  <div className="icon-box">
                    <img className="icon-tinder" src={tinder} alt="tinder image"></img>
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
        <hr />
        <h5>{footerMessage}</h5>
        <p className="footer__text">
          © {new Date().getFullYear()} Henry Vuong
        </p>

      </Container>
    </footer>
  );
};

export default Footer;
