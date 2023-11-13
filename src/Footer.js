import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer style={{backgroundColor: 'rgba(60, 60, 67, 0.03)', textAlign: 'center', padding: '10px', position: 'fixed', right: '0', bottom: '0', width: '81%'}}>
      <p>United States | Español | Some other language</p>
      <p>© 2023 Apple Inc. All rights reserved</p>
      <p>
        <a >Internet Service Terms</a> | 
        <a >Apple Music & Privacy</a> | 
        <a >Cookie Warning</a> | 
        <a >Support</a> | 
        <a >Feedback</a>
      </p>
    </footer>
  );
}

export default Footer;
