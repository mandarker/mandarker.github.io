import React from 'react';
import '.././master.css';

import pikachuPreview from '../../previewVideos/pikachu.mp4';
import pikachuFresnel from '../../images/pikachufresnel.png';
import pikachuGraph from '../../images/pikachugraph.png';

class Pikachu extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>Pikachu Shader</h1>
        <video loop autoPlay muted src={pikachuPreview}></video>
        <h2>Based on the style of Pokemon Mystery Dungeon DX.</h2>
        <p>This shader was my first attempt to replicate the graphics of another game.</p>
        <p>For this project, I used Shader Graph, a node based shader integrated into the Unity engine.
          I had been learning the ropes of shader graph, and I thought it would be a good idea to try using it to replicate an existing game's lighting style.</p>
        <p>The result was surprisingly simple, yet a little lackluster.</p>
        <img src={pikachuGraph}></img>
        <h2>The amount of nodes needed to get a similar effect was smaller than expected.</h2>
        <p>Combining perlin noise and fresnel lighting created a crayon-like texture while highlighting the edges.
          Darker lighting makes the crayon texture more prominent. </p>
        <p>Despite successfully replicating these two properties, shader graph's simplicity removes any ability to create custom post processing effects.
          This includes an outline effect, which I substituted with a fresnel node.
          However, it became clear that this replacement was not enough.</p>
        <img src={pikachuFresnel}></img>
        <h2>Dark spots on tail resulting from normal based outline.</h2>
        <p>The outline method I chose only works on rounded objects, but even so, it still creates inconsistent outline width.
          I will likely retry the project again in the future to iron out these kinks.</p>
      </div>
    );
  }
}

export default Pikachu;
