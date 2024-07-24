import React from 'react';
import backgroundVideo from '../../assets/background-video.mp4';

const BackgroundVideo = () => (
  <video className="background-video" autoPlay loop muted>
    <source src={backgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default BackgroundVideo;