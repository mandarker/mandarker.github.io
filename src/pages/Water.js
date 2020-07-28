import React from 'react';
import './master.css';

import waterPreview from '../previewVideos/water.mp4';
import waterBadFoam from '../images/waterbadfoam.png';

class Water extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>Water Shader</h1>
        <video loop autoPlay muted src={waterPreview}></video>
        <h2>Basic water simulation on a plane using HLSL.</h2>
        <p>The water was created from a heightmap, which I used to make both the vertex displacement and the surface normals.</p>
        <p>Initially, the intention was to create realistic looking water using Gerstner waves, but I wanted to see how well using a single heightmap would turn out.</p>
        <p>The version I made was moderately satisfying, but there are a few things I wish to improve about it.</p>
        <p>One of these was the addition of sea foam. I had thought of using the maximums on the heightmap and adding noise to create some sort of sea foam, but the results of testing made it seem like a moving texture on top of the water.</p>
        <img src={waterBadFoam}></img>
        <h2>The "foam" is also visibly tiled.</h2>
        <p>The maximums also do not account for the foam being distorted with the flow. It instead moves at the same pace as the water.</p>
        <p>This is lack of distortion is apparent on the surface normals. Currently, the surface normals are set to move at a constant speed. However, water does not flow in this manner, so the result seems a little unnatural.</p>
        <p>I will probably look for a way to solve both of these problems in the near future.</p>
      </div>
    );
  }
}

export default Water;
