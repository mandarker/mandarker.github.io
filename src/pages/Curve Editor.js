import React from 'react';
import './master.css';

import curveEditor from '../previewVideos/curveeditor.mp4';

class CurveEditor extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>2D Bezier Curve Editor</h1>
        <video loop autoPlay muted src={curveEditor}></video>
        <h2>Creating a bezier curve tool to speed up rhythm game beatmap development.</h2>
        <p>During the development of Project Rubicon, the designers needed a fast way to create beatmaps. This tool was created to assist in that process.</p>
        <p>The tool is meant to be used in Unity's scene view, allowing the designers to immediately play a spline of Bezier curves they had created to playtest their beatmap.</p>
        <iframe src="https://player.vimeo.com/video/667569247?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <h2>Users can also see exactly what the screen will see at at their desired time in the beatmap. The curve editor supports multiple curves at different visual depths.</h2>
        <p>The quadratic bezier curves are rendered using signed distance fields (SDFs). SDFs were used instead of mesh generation to reduce the vertex count; the vertices are instead sent through a StructuredBuffer to the shader.
          This also ensures that any zooming in on the curve would prevent the user from noticing any polygons.
        </p>
        <iframe src="https://player.vimeo.com/video/667569259?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <h2>Increasing the width of the curve does not result in artifacts.</h2>
        <p>While developing the tool and discussing it with the designers of the game, I also learned about and added quality of life improvements to better the user experience.</p>
        <iframe src="https://player.vimeo.com/video/667569232?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <h2>Giving the user the ability to see exactly where the endpoints are to track notes.</h2>
        <iframe src="https://player.vimeo.com/video/667569278?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay"></iframe>
        <h2>Creating the option of moving the rest of the curves to be consistent with endpoints.</h2>
        <p>There are other functionalities not depicted, such as the ability to change the curve color.
        </p>
        <p>Of course, the tool can be improved even further. For example, the scene view can show the notes themselves rather than a representation fo them with endpoints. 
          However, the designers on the team seem content with the current implementation, and focus on development
          should shift towards finishing the rest of the game.
        </p>
      </div>
    );
  }
}

export default CurveEditor;
