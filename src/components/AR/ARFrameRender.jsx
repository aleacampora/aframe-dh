import 'aframe';
import 'aframe-ar';
import React, { useEffect } from 'react';

export const ARFrameBody = () => {
  useEffect(() => {
    // Controlla se lo script AR.js è già stato caricato
    if (!document.querySelector('script[src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js';
      script.onload = () => {
        console.log('AR.js script loaded.');
      };
      script.onerror = () => {
        console.error('Failed to load AR.js script.');
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <a-scene embedded arjs='sourceType: webcam;'>
      <a-marker type='hiro'>
        <a-ring 
          position='0 0.5 0'
          radius-inner='2'
          radius-outer='2'
          color='blue'
          material='opacity: 0.7;'></a-ring>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};
