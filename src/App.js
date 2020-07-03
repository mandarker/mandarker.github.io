import React from 'react';
import './App.css';
import backgroundVideo from './videos/Background Video.mp4';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {this.setState({height: window.innerHeight, width: window.innerWidth});};

  render() {
    let navigation = <button>&#8801;</button>;
    if (this.state.width > 500){
      navigation =
      <nav>
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>;
    }

    return (
      <div>
        <div class="fullscreen-bg">
          <video autoPlay muted loop class="fullscreen-bg_video">
            <source src={backgroundVideo} type="video/mp4"></source>
          </video>
        </div>
        <header>
          {navigation}
        </header>
      </div>
    );
  }
}

export default App;
