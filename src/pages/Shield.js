import React from 'react';
import './master.css';

import shieldPreview from '../previewVideos/shield.mp4';
import shieldHighBloom from '../images/shieldhighbloom.png';
import shieldBloomFar from '../images/shieldbloomfar.png';
import shieldPerlinTex from '../images/shieldperlintex.png';

class Shield extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>Shield Shader</h1>
        <video loop autoPlay muted src={shieldPreview}></video>
        <h2>First step into post processing.</h2>
        <p>This project was aimed towards making my custom post processing effects, starting with bloom and high dynamic range (HDR).
          Working with the HDR meant I needed to be more careful with which color values went above 1, as they would be affected by the bloom.</p>
        <img src={shieldHighBloom}></img>
        <h2>The result of having too much bloom by setting the bloom threshold low.</h2>
        <p>The custom bloom I made uses downsampling and upsampling on 2x2 squares of pixels.
          While it may be simple, it is good enough to get the job done.
          The drawback is that the bloom is resolution dependent and does not work as well when looked at from further away.</p>
        <img src={shieldBloomFar}></img>
        <h2>Slight inaccuracy when looking from afar.</h2>
        <p>Part of this inaccuracy lies within the lack of antialiasing, which means isolated and missing pixels are affected.</p>
        <p>A challenge I found was working with generating the shield using Perlin noise.
          If I had mapped a Perlin texture normally onto the sphere, the texture would look wrong.</p>
        <img src={shieldPerlinTex}></img>
        <h2>Odd stretching near top of the shield, and clipping where the texture wraps.</h2>
        <p>I thought of two solutions. One was to make a Perlin texture that wrapped vertically and horizontally.
          This solves the clipping issue, but it does not solve the stretching.
          The other was to map the Perlin texture using triplanar, which was the solution I opted for.
          This allowed an even looking distribution of the Perlin texture on all sides of the sphere.</p>
        <p>The grid on the sphere uses the same perlin texture to light up its lines.
          Without the grid, I felt as if the shield was looking a bit bland.
          After adding the grid, I wanted to make it feel alive by pulsing along its line with bloom.</p>
        <p>The last thing I added as a texture distortion effect to also make the shield feel alive.
          There were some problems with it initially, as for some reason background objects rendered twice when I used a Grab Pass.</p>
        <p>While I do not have an image at the ready for this effect, I realized it was because the background object had high values because of the HDR, meaning that bloom would be rendered on top of where the object was in screen space.
          This was a problem because the object is shown somewhere else due to the distortion effect.</p>
        <p>This project was challenging, but it marks my first step into making better looking VFX.</p>
      </div>
    );
  }
}

export default Shield;
