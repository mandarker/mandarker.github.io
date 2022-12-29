import React from 'react';
import '.././master.css';

import colormancy1Preview from '../../previewVideos/colormancy1.mp4';
import colormancyPainting from '../../images/colormancy.png';
import colormancyVideo from '../../videos/colormancyspellattack.mp4';

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
        <p>These are my VFX contributions to Colormancy, a multiplayer game where players must cast spells to paint the environment.
        Fully painting the environment and dispatching enemies will win the game.</p>
        <img src={colormancyPainting}></img>
        <h2>An example of a level fully painted using the spells below.</h2>
        <p>Painting is done in real time on random meshes in the scene pulled from free sources.</p>
        <video loop autoPlay muted src={colormancyVideo}></video>
        <h2>Real time painting in action.</h2>
        <p>Each visual effect below has their own written shaders in HLSL and geometry. There are more spells not included in the interest of not cramming this webpage full of videos.</p>
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
