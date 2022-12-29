import React from 'react';
import '.././master.css';

import iaidoPreview from '../../previewVideos/iaido.mp4';
import iaidoOutline from '../../images/iaidooutline.png';
import iaidoComplete from '../../images/iaidoComplete.png';

class IAIDO extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>IAIDO</h1>
        <video loop autoPlay muted src={iaidoPreview}></video>
        <h2>Jumping into the Unreal Material editor and post processing.</h2>
        <p>IAIDO was created during Global Game Jam 2022. 
            My contributions to the game include some blueprinting as well as the materials used for both the models and the post processing.</p>
        <p>The post processing stack includes four specific layers. 
            The first layer is a simple grayscale using a weighted calculation.
            The second layer is the outline shader, and is the most interesting material of the stack.</p>
        <p>I wanted to emulate the imperfections that came with brush strokes.
            To do this, I decided to botch the calculations for a general outline post processing effect on purpose by shifting the texture coordinates.</p>
        <img src={iaidoOutline}></img>
        <h2>Outline on the base sphere.</h2>
        <p>The third layer then filters the scene such that only the red hues come through as a solid color.
            The last layer creates a parchment like texture on top of the entire screen.
        </p>
        <img src={iaidoComplete}></img>
        <h2>Simple effects making a cohesive scene. Artifacts also create "blood" on the floor.</h2>
      </div>
    );
  }
}

export default IAIDO;
