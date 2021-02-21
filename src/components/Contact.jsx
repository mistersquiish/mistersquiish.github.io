import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer/Footer';
import Lottie from 'react-lottie';
import Title from './Title/Title';
import Fade from 'react-reveal/Fade';
import { PortfolioProvider } from '../context/context';
import { contactData, footerData } from '../mock/data';
import contactLottie from '../static/contact-lottie.json';

const Contact = () => {
  const [footer, setFooter] = useState({});
  const { whereToFind, contact, email } = contactData;

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);
   
  return (
    <PortfolioProvider value={{ footer }}>
      <Menu />
      <section id="contact">
          <Lottie
            options={{
              animationData: contactLottie,
              autoplay: true
            }}
            height={400}
            style={{pointerEvents: 'none'}}
          />
          
          <div className="contact-text-container">
            <Title title="Contact" />
            <Fade bottom duration={1000} delay={1000} distance="30px">
              <p>
                {whereToFind}
                <br /><br />
                {contact} <a href={`mailto:${email}`}>{email}</a>
              </p>
            </Fade>
          </div>
      </section>
      <Footer footerMessage="Lottie image from pixeltrue.com"/>
    </PortfolioProvider>
  );
}

export default Contact;
