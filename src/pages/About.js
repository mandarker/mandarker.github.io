import React from 'react';
import './master.css';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <h1>About Me</h1>
        <p>Spring Nguyen is a software engineer and technical artist with a passion for realtime rendering.
            He graduated from the University of California, Irvine as a Computer Game Science B.S. with a
            specialization in computer graphics. He currently works in AR, pioneering the field by making
            fully body motion tracking accessible on modern smartphones. He also leads the engineering team
            at Reality Check Games LLC.
        </p>
        <p>In his spare time, Spring can be found working on smaller projects related to computer graphics. 
            The details of these projects can be found in his <a onClick={(e) => this.props.changePage("Blog", e)}>blog.</a>
        </p>
        <p>Spring is also an avid pet lover and home cook.</p>
      </div>
    );
  }
}

export default About;
