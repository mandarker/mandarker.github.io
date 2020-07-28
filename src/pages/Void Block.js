import React from 'react';
import './master.css';

import voidblockPreview from '../previewVideos/voidblock.mp4';
import voidblockGradient from '../images/voidblockgradient.png';
import voidblockConversion from '../images/voidblockconversion.png';

class VoidBlock extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>Void Block Shader</h1>
        <video loop autoPlay muted src={voidblockPreview}></video>
        <h2>The first shader I made.</h2>
        <p>When I was first learning HLSL, this was the project I was using to learn.
          It is not based on any tutorial and includes multiple techniques I learned while playing wround with the code.</p>
        <p>I first worked on the center object, a sort of hole inspired by the teleporters in Twilight Princess.
          I figured out how to make the red lines seem as if they were "transferring data" by using a gradient.</p>
        <img src={voidblockGradient}></img>
        <h2>Combining this texture with a lerp makes the lines move.</h2>
        <p>The rest of the shader uses a screen space calculation to set the rgb values.
          First, the screen coordinates are converted into a value between 0 and 255 by adding the x and y coordinates together.
          Then, this value becomes the hue in an HSL color model.</p>
        <img src={voidblockConversion}></img>
        <h2>Using a helper function to convert from hsl to rgb.</h2>
        <p>Once the HSL with the proper hue is converted to RGB, the value is outputted in the pixel shader stage.</p>
        <p>The last part I finished was the expansion as well as the color change of the cubes.
          After learning that I could set material values through C# scripts, I tried it out by setting a value controlling the color in a script that also expanded the circle.</p>
        <p>I was pretty happy with the result, especially after learning many shader concepts through this project.</p>
      </div>
    );
  }
}

export default VoidBlock;
