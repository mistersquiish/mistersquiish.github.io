import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../static/resume.pdf';

const ResumeDocument = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);


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
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
 
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={isDesktop ? "1.5" : "1"}/>
      </Document>
    </div>
  );
}

function Resume() {
  return (
    <ResumeDocument />
  )
}

export default Resume;
