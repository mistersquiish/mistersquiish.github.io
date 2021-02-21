import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../static/resume.pdf';
import Menu from './Menu';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';
import { footerData } from '../mock/data';


const ResumeDocument = () => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setFooter({ ...footerData });
  }, []);

  const [numPages, setNumPages] = useState(null);


  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1297) {
      setIsMobile(true);
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
      setIsMobile(false);
    }
  }, []);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
      textLayers.forEach(layer => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = "";
    });
  }
   
  return (
    <PortfolioProvider value={{ footer }}>
      <Menu />
      <div id='resume'>
        <div className='download-button-container'>
          <a
            className="cta-btn cta-btn--hero"
            href={resume}>
            Download
          </a>
        </div>
        <div className='resume-container'>
        <Document
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={1}
            onLoadSuccess={removeTextLayerOffset}
            scale={isDesktop ? 1.25 : .60}
            />
        </Document>
        </div>
      </div>
      <Footer />
    </PortfolioProvider>
  );
}

function Resume() {
  return (
    <ResumeDocument />
  )
}

export default Resume;
