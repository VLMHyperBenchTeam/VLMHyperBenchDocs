import React from 'react';

const FullScreenSvg = ({ src, alt }) => (
  <div style={{ width: '100%', height: '500px', overflow: 'auto' }}>
    <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />
  </div>
);

export default FullScreenSvg;