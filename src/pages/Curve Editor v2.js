import React from 'react';
import './master.css';

import curveEditorv2 from '../previewVideos/curveeditorv2.mp4';
import curveEditorv2image from '../images/curveeditorv2.png';

class CurveEditorv2 extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>Bezier Curve Editor v2</h1>
        <video loop autoPlay muted src={curveEditorv2}></video>
        <h2>Improving upon the previous curve editor.</h2>
        <p>The previous curve editor ended up having plenty of UX issues and was not able to implement the new design for the game.</p>
        <p>For one, there was intense lag when dragging points around. To address this, the renderer only renders in the editor when the handle is finished being dragged.</p>
        <p>The curves have been converted from SDFs to meshes to support consistent texturing, as seen in the preview video.</p>
        <img src={curveEditorv2image}></img>
        <h2>Heavy improvements to the UI. Selected curves/splines are now highlighted, and curves have been condensed considerably.</h2>
        <p>To support multiple splines, the editor now focuses on a per spline basis. This gives the user much more control over the spline's overall position.</p>
        <p>Multiple splines/curves can be selected by holding the Ctrl key. The Ctrl key can also make curves straight when held while editing the curve in the scene view.</p>
        <p>Other options can be seen in the image above.</p>
        <p>The editor now also supports autosave, preventing the designer from accidently losing their work.</p>
      </div>
    );
  }
}

export default CurveEditorv2;
