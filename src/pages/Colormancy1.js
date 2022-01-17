import React from 'react';
import './master.css';

import colormancy1Preview from '../previewVideos/colormancy1.mp4';

class Colormancy extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>Colormancy VFX</h1>
        <video loop autoPlay muted src={colormancy1Preview}></video>
        <h2>Making spell effects for an action packed painting game.</h2>
        <p>These are my VFX contributions to Colormancy, a game where players must cast spells to paint the environment.
        Fully painting the environment and dispatching enemies will win the game.</p>
        <p>Each effect has their own written shaders in HLSL and geometry.</p>
        <iframe src="https://player.vimeo.com/video/533730360?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <iframe src="https://player.vimeo.com/video/533730597?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <iframe src="https://player.vimeo.com/video/533730702?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <iframe src="https://player.vimeo.com/video/533730639?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <iframe src="https://player.vimeo.com/video/533730518?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <iframe src="https://player.vimeo.com/video/533730394?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
      </div>
    );
  }
}

export default Colormancy;
