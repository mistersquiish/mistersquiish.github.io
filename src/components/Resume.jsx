import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../static/resume.pdf';

const ResumeDocument = () => {
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
 
  return (
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={1}
          scale={isDesktop ? 1.5 : 1}
          />
      </Document>
  );
}

function Resume() {
  return (
    <ResumeDocument />
  )
}

export default Resume;
