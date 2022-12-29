import React from 'react';
import './App.css';

import Home from './pages/Home'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import About from './pages/About'

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

    this.changePage = this.changePage.bind(this);
    this.test = React.createRef();
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.test.current.scrollTop = 0;
  }

  update = () => {this.setState({height: window.innerHeight, width: window.innerWidth});};

  changePage(p, e) {
    e.preventDefault();
    this.setState(state => ({page: p, menuExpand: false}));
  }

  render() {
    let header =
    <header className="header_wide">
      <div className="header_container">
        <h1>Spring Nguyen |</h1>
        <h4>Technical Artist and Software Engineer</h4>
      </div>
      <div className="header_container">
        <button onClick={(e) => this.changePage("Home", e)}><h2>Home</h2></button>
        <button onClick={(e) => this.changePage("Portfolio", e)}><h2>Portfolio</h2></button>
        <button onClick={(e) => this.changePage("Blog", e)}><h2>Blog</h2></button>
        <button onClick={(e) => this.changePage("About", e)}><h2>About</h2></button>
        <a href="https://twitter.com/realmandarker"><img src={twitter}></img></a>
        <a href="https://www.linkedin.com/in/springn/"><img src={linkedin}></img></a>
      </div>
    </header>;

    let content;
    let page;
    let nav;

    switch (this.state.page)
    {
      case 'Home':
        page = <Home />;
        break;
      case 'Portfolio':
        page = <Portfolio />;
        break;
      case 'Blog':
        page = <Blog />;
        break;
      case 'About':
        page = <About changePage = {this.changePage}/>;
        break;
    }

    content =
    <div className="content_wide" ref={this.test}>
      {page}
      {nav}
    </div>;

    let main =
      <div>
        {header}
        {content}
      </div>;

    // if screen width is small, use different css
    if (this.state.width/this.state.height < 650.0/500.0 || this.state.width < 960){
      content =
      <div className="content_narrow" ref={this.test}>
        {page}
        {nav}
      </div>;

      header =
      <header className="header_narrow">
        <button className="hamburger" onClick={() => this.setState({menuExpand: true})}><h2>&#9776;</h2></button>
        <h1>Spring Nguyen</h1>
        <div className="empty"></div>
      </header>;

      let expandedMenu;

      if (this.state.menuExpand){
        expandedMenu =
        <div className = "expandedMenu">
          <button className="cross" onClick={() => this.setState({menuExpand: false})}><h3>&times;</h3></button>
          <button onClick={(e) => this.changePage("Home", e)}><h2>Home</h2></button>
          <a href={resume}><h2>Resume</h2></a>
          <h2>Social Media</h2>
          <div className="contactInfo_narrow">
            <a href="https://twitter.com/realmandarker"><img src={twitter}></img></a>
            <a href="https://www.linkedin.com/in/springn/"><img src={linkedin}></img></a>
          </div>
        </div>;
      }

      main =
      <div>
        {expandedMenu}
        {header}
        {content}
      </div>;
    }


    return (
      main
    );
  }
}

export default App;
