import React from 'react';
import './master.css';

import portfolioProjects from '../portfolioProjects';

import homeVideo from '../videos/synthwavejitter.mp4'
import profile from '../images/profile.jpg'

// svgs
import downloadSVG from '../images/smicons/download.svg'
import externalLinkSVG from '../images/smicons/external.svg'

// resume
import resume from '../Resume.pdf'

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        <div className="landing" ref={this.props.refList.homeRef}>
          <video src={homeVideo} autoPlay loop muted preload='metadata'></video>
          <div className="landing_text">
            <h1>Spring Nguyen</h1>
            <h2>Technical Artist and Software Engineer</h2>
            <p>Welcome to my website! Here, I compile and detail my work and projects exploring different technologies, <br /> mainly within real-time rendering.</p>
            <button onClick={(e) => this.props.changePage("Portfolio", e)}>scroll down to advance <br />&#9947;</button>
          </div>
        </div>
        <div className="portfolio" ref={this.props.refList.portfolioRef}>
          <h1>My Portfolio</h1>
          <div className="portfolioContainer">
            {portfolioProjects.map(({id, title, vidsrc, desc, download, link, blog}) =>
              <div className="portfolioBlock">
                <video muted src={vidsrc} autoPlay loop disablePictureInPicture controlsList='nodownload'></video>
                <div className="portfolioContent">
                  <div className="portfolioText">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                  </div>
                  <div className="portfolioLinks">
                    { 
                      download !== "" ? <a href={download} download>
                        <button>Download <img src={downloadSVG}></img></button>
                        </a> : <></>
                    }
                    {
                      link !== "" ? <a href={link}>
                        <button>Website <img src={externalLinkSVG}></img></button>
                        </a> : <></>
                    }
                    {
                      blog !== "" ? <a href={blog}>
                        <button>Blog Post <img src={externalLinkSVG}></img></button>
                        </a> : <></>
                    }
                  </div>
                </div>
              </div> 
            )}
          </div>
        </div>
        <div className="about" ref={this.props.refList.aboutRef}>
          <img src={profile}></img>
          <div className="about_text">
            <h1>About Me</h1>
            <p>Hey there! My name is Spring, and I'm a software engineer and technical artist with a passion for realtime rendering.
                I graduated from the University of California, Irvine as a Computer Game Science Bachelor of Science. 
            </p>
            <p>I enjoy creating shaders, VFX, and editing tools. I also love working with unfamiliar technologies 
              and libraries. However, my passion lies in working on anything related to computer graphics. 
              I currently work in AR, making full body motion tracking accessible on modern smartphones. 
              I also lead the engineering team at Reality Check Games LLC.
            </p>
            <p>I love cooperating with multidisciplinary teammates, but I am also a motivated self-starter that can
              adapt to different roles. I am currently based in Los Angeles, California, but I can excel in remote opportunities!
            </p>
            <p>In my spare time, I work on smaller projects. 
                The details of these projects can be found in my <a onClick={(e) => this.props.changePage("Blog", e)}>blog.</a>
            </p>
            <div className="about_resume">
              <a href={resume} download>
                <button>Resume<img src={downloadSVG}></img></button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
