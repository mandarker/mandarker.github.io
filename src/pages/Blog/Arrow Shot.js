import React from 'react';
import '.././master.css';

import arrowshotPreview from '../../previewVideos/arrowshot.mp4';
import arrowshotBow from '../../images/arrowshotbow.png';

class ArrowShot extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>Arrow Shot Scene</h1>
        <video loop autoPlay muted src={arrowshotPreview}></video>
        <h2>Making multiple shaders and expanding into realtime VFX.</h2>
        <p>I wanted to make a much more dynamic scene, so I also forayed into animation for the first time.
          Animation isn't my strong suit, but I was willing to learn it to complete this project.
          The animation and rigging of the model quickly became the most time consuming part of the project.</p>
        <p>The shaders, on the other hand, were more simple to work with.</p>
        <img src={arrowshotBow}></img>
        <h2>The bow with two shader passes: one for the internal texture and one for the outline.</h2>
        <p>The bow is "spawned" in through vertex displacement along the surface normals.
          What I wanted to achieve during this time was a glow with the bow.
          At the time, I did not know how to make a post processing effect, so instead I opted for an outline.
          This is something I hope to achieve soon.</p>
        <p>The ground breaking was achieved from a C# script rotating and translating the individual ground pieces.</p>
        <p>All in all, this project was an experiment to see what I could do with my current knowledge at the time.
          While I achieved the basics of what I wanted to see, there was a lack of polish due to my inexperience with animation and no knowlege of post processing effects.</p>
      </div>
    );
  }
}

export default ArrowShot;
