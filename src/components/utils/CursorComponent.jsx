import React, { useEffect } from 'react';
import '../../styles/Cursor.css';

const CursorComponent = () => {
    useEffect(() => {
      const updateCursor = (e) => {
        document.documentElement.style.setProperty(
          '--x',
          e.clientX + 'px'
        );
        document.documentElement.style.setProperty(
          '--y',
          e.clientY + 'px'
        );
      };
  
      document.body.addEventListener('mousemove', updateCursor);
  
      return () => {
        document.body.removeEventListener('mousemove', updateCursor);
      };
    }, []);
  
    return <div id="custom-cursor"></div>;
  };
  
  export default CursorComponent;