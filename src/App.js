import React from 'react';
import './App.css';
import file from './smicons/file.png';
import twitter from './smicons/twitter.png';
import linkedin from './smicons/linkedin.png';
import resume from './Resume.pdf';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0,
      menuExpand: false,
      page: "Home"
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {this.setState({height: window.innerHeight, width: window.innerWidth});};

  render() {
    let header =
    <header className="header_wide">
      <h1>Spring Nguyen</h1>
      <div className="contactInfo_wide">
        <a href={resume}><img src={file}></img></a>
        <a href="https://twitter.com/realmandarker"><img src={twitter}></img></a>
        <a href="https://www.linkedin.com/in/springn/"><img src={linkedin}></img></a>
      </div>
    </header>;

    // if screen width is small, use different css
    if (this.state.width < 700){
      header =
      <header className="header_narrow">
        <h1>Spring Nguyen</h1>
        <div className="contactInfo_narrow">
          <a href={resume}><img src={file}></img></a>
          <a href="https://twitter.com/realmandarker"><img src={twitter}></img></a>
          <a href="https://www.linkedin.com/in/springn/"><img src={linkedin}></img></a>
        </div>
      </header>;
    }

    return (
      <div>
        {header}
      </div>
    );
  }
}

export default App;
