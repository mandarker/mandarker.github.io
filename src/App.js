import React from 'react';
import './App.css';
import backgroundVideo from './videos/Background Video.mp4';

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
    let navigation = <button onClick={() => this.setState({menuExpand: !this.state.menuExpand})}>&#8801;</button>;

    // if screen width is large, use horizontal navigation instead of button
    if (this.state.width > 700){
      navigation =
      <nav>
        <ul>
          <li><button onClick={() => this.setState({page: "About"})}>About</button></li>
          <li><button onClick={() => this.setState({page: "Portfolio"})}>Portfolio</button></li>
          <li><button onClick={() => this.setState({page: "Blog"})}>Blog</button></li>
          <li><button onClick={() => this.setState({page: "Contact"})}>Contact</button></li>
        </ul>
      </nav>;
    }

    let header =
    <header>
      <div className="header_withButton">
        <div></div>
        <h1>Spring Nguyen</h1>
        {navigation}
      </div>
    </header>;

    // if screen width is large, use different css
    if (this.state.width > 700){
      header =
      <header className="header_noButton">
        <h1>Spring Nguyen</h1>
        {navigation}
      </header>;
    }

    if (this.state.width < 700 && this.state.menuExpand){
      header =
      <header>
        <div className="header_withButton">
          <div></div>
          <h1>Spring Nguyen</h1>
          {navigation}
        </div>
        <ul className="ul_withButtonPressed">
          <li><button onClick={() => this.setState({page: "About"})}>About</button></li>
          <li><button onClick={() => this.setState({page: "Portfolio"})}>Portfolio</button></li>
          <li><button onClick={() => this.setState({page: "Blog"})}>Blog</button></li>
          <li><button onClick={() => this.setState({page: "Contact"})}>Contact</button></li>
        </ul>;
      </header>;
    }

    return (
      <div>
        <div className="fullscreen-bg">
          <video autoPlay muted loop className="fullscreen-bg_video">
            <source src={backgroundVideo} type="video/mp4"></source>
          </video>
        </div>
        {header}
      </div>
    );
  }
}

export default App;
