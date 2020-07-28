import React from 'react';
import './master.css';

import synthwavePreview from '../previewVideos/synthwave.mp4';
import synthwaveJitter from '../videos/synthwavejitter.mp4';
import synthwaveRoad from '../videos/synthwaveroad.mp4';
import synthwaveNoShaders from '../images/synthwavenoshaders.png';
import synthwaveGrid from '../images/synthwavegrid.png';
import synthwaveSphere from '../images/synthwavesphere.png';
import synthwaveBackground from '../images/synthwavebackground.png';
import synthwavePostprocess from '../images/synthwavepostprocess.png';

class Synthwave extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>Synthwave Scene</h1>
        <video loop autoPlay muted src={synthwavePreview}></video>
        <h2>Expanding into other post processing effects</h2>
        <p>This project took a week to finish.
        Within that week, I learned quite a bit about post processing, as well as how powerful it can be to stylize games.</p>
        <img src={synthwaveNoShaders}></img>
        <h2>The scene with no shaders.</h2>
        <p>The objects in this project are fairly simple, consisting of only planes, cylinders, and spheres.
        Most of the graphics are a result of the shaders and post processing.</p>
        <p>When starting this project, I focused on the road.
        First, I created a texture representing the heightmap of the road.
        This allowed me to do a simple texture lookup to displace the vertices on a plane.
        From here, I wanted to create an infinitely moving road, but I wasn't sure how to approach this at first.</p>
        <video controls src={synthwaveJitter}></video>
        <h2>Jitter as a result of moving the UVs of the texture.</h2>
        <p>I tried moving the UVs, but the results were not great.
        It seems that moving the UVs that displace the vertices also distorts the texture lookup using the same UVs in the pixel stage of the shader.</p>
        <p>As an alternative, I duplicated the plane multiple times and moved them using Unity's basic transformations.
        This worked since the perlin texture I used wrapped on itself.</p>
        <p>I then split the road into two separate areas.
        One would function as the main road, and the other would be hills with a gridlike pattern on top of them.
        Both would be generated using the main shader.</p>
        <img src={synthwaveGrid}></img>
        <h2>Only three lines for the grid.</h2>
        <p>The grid pattern was simple.
        The more challenging part was generating a road using a shader.
        I wanted to be able to modify the road lines at will, creating as many lanes or making the lines as long as I would like.</p>
        <video controls src={synthwaveRoad}></video>
        <h2>The multiple ways the road could be customized.</h2>
        <p>To achieve this, I changed the domains of the road to [0, 1], so I could segment and tile the road more easily.
        I also added a function to ensure that the lines closest to the center remained solid.
        This was an involved process, but it was worth the customizability.</p>
        <p>The next part of the scene I focused on was the skybox.
        I looked into using Unity's own skybox, but I also wanted to implement my own sun and moon in the sky.
        Instead, I chose to create a sphere surrounding the scene, culling the front faces so that it would be visible from the inside.</p>
        <img src={synthwaveSphere}></img>
        <h2>The sphere viewed from outside.</h2>
        <p>To create the sun, I used a dot product between the directional light of the scene and the normal of the sphere.
        I then capped the value at a certain threshold to make the circular shape.
        Then, I added the horizontal lines by replacing the color at the pixel with the background gradient of the sky.
        I made sure that all these properties were modifiable in the editor.</p>
        <p>The moon was made in a similar fashion, with two extra vectors created to negate portions of the moon for the crescent shape.</p>
        <p>The stars in the background were made using blue noise, to ensure that the stars remained relatively equidistant from each other.</p>
        <img src={synthwaveBackground}></img>
        <h2>A closer look at the buildings and hills in the background.</h2>
        <p>Everything in the background was generated using a single perlin noise texture, including the buildings.</p>
        <p>The hills are self-explanatory, but making the buildings look the way I wanted them to was a challenge.
        I needed to split the cylinder into a grid and fill the grid in depending on the height of the perlin noise at that x UV coordinate.</p>
        <p>The buildings, like the road, are fully modifiable in the editor.</p>
        <img src={synthwavePostprocess}></img>
        <h2>The retro post process effect in full view.</h2>
        <p>This effect enhances the scene immensely by adding noise, black lines, and screen tearing to the final product.
        The noise isn't a texture; it is the result of a pseudorandom algorithm on each pixel of the screen.
        The black lines were made the same way as the grid on the road, and the screen tearing is made with a sine function.</p>
        <p>Despite using mostly simplistic math, I feel as if I made a good-looking environment.
        I'm pretty happy with the result, and I definitely want to make more shaders and post processing effects moving forward.</p>
      </div>
    );
  }
}

export default Synthwave;
