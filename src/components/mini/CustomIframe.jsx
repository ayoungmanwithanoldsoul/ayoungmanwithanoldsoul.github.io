import React from 'react';
import '../../styles/CustomIframe.css'; // Import the CSS file for styling

const CustomIframe = ({ src }) => {
  return (
    <div className='iframe-container'>
      <iframe
        className='custom-iframe'
        src={src}
        width="100%"
        height="600"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default CustomIframe;
