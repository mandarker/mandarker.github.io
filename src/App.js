import React from 'react';
import './App.css';

import Shield from './pages/Shield';
import Water from './pages/Water';
import Pikachu from './pages/Pikachu';
import ArrowShot from './pages/Arrow Shot';
import VoidBlock from './pages/Void Block';
import Synthwave from './pages/Synthwave';
import Colormancy from './pages/Colormancy1';
import CurveEditor from './pages/Curve Editor';

import twitter from './smicons/twitter.png';
import linkedin from './smicons/linkedin.png';
import resume from './Resume.pdf';
import previews from './previews';

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
      <h1>Spring Nguyen</h1>
      <button onClick={(e) => this.changePage("Home", e)}><h2>Home</h2></button>
      <a href={resume}><h2>Resume</h2></a>
      <h2>Social Media</h2>
      <div className="contactInfo_wide">
        <a href="https://twitter.com/realmandarker"><img src={twitter}></img></a>
        <a href="https://www.linkedin.com/in/springn/"><img src={linkedin}></img></a>
      </div>
    </header>;

    let content;
    let page;
    let nav;

    if (this.state.page == 'Curve Editor'){
      page = <CurveEditor />;

      nav =
      <div className="bottom_nav">
        <button className="bottom_nav_left" onClick={(e) => this.changePage('Synthwave', e)}>
          <h3>Previous:</h3>
          <h3>Colormancy</h3>
        </button>
        <button className="bottom_nav_right">
          <h3>Next:</h3>
          <h3>TBD</h3>
        </button>
      </div>;
    }
    else if (this.state.page == 'Colormancy'){
      page = <Colormancy />;

      nav =
      <div className="bottom_nav">
        <button className="bottom_nav_left" onClick={(e) => this.changePage('Synthwave', e)}>
          <h3>Previous:</h3>
          <h3>Synthwave Scene</h3>
        </button>
        <button className="bottom_nav_right" onClick={(e) => this.changePage('Curve Editor', e)}>
          <h3>Next:</h3>
          <h3>Curve Editor</h3>
        </button>
      </div>;
    }
    else if (this.state.page == 'Synthwave'){
      page = <Synthwave />;

      nav =
      <div className="bottom_nav">
        <button className="bottom_nav_left" onClick={(e) => this.changePage('Shield', e)}>
          <h3>Previous:</h3>
          <h3>Shield Shader</h3>
        </button>
        <button className="bottom_nav_right" onClick={(e) => this.changePage('Colormancy1', e)}>
          <h3>Next:</h3>
          <h3>Colormancy VFX Part 1</h3>
        </button>
      </div>;
    }
    else if (this.state.page == 'Shield'){
      page = <Shield />;

      nav =
      <div className="bottom_nav">
        <button className="bottom_nav_left" onClick={(e) => this.changePage('Water', e)}>
          <h3>Previous:</h3>
          <h3>Water Shader</h3>
        </button>
        <button className="bottom_nav_right" onClick={(e) => this.changePage('Synthwave', e)}>
          <h3>Next:</h3>
          <h3>Synthwave Scene</h3>
        </button>
      </div>;
    }
    else if (this.state.page == 'Water'){
      page = <Water />;

      nav =
      <div className="bottom_nav">
        <button className="bottom_nav_left" onClick={(e) => this.changePage('Pikachu', e)}>
          <h3>Previous:</h3>
          <h3>Pikachu Shader</h3>
        </button>
        <button className="bottom_nav_right" onClick={(e) => this.changePage('Shield', e)}>
          <h3>Next:</h3>
          <h3>Shield Shader</h3>
        </button>
      </div>;
    }
    else if (this.state.page == 'Pikachu'){
      page = <Pikachu />;

      nav =
      <div className="bottom_nav">
        <button className="bottom_nav_left" onClick={(e) => this.changePage('Arrow Shot', e)}>
          <h3>Previous:</h3>
          <h3>Arrow Shot Scene</h3>
        </button>
        <button className="bottom_nav_right" onClick={(e) => this.changePage('Water', e)}>
          <h3>Next:</h3>
          <h3>Water Shader</h3>
        </button>
      </div>;
    }
    else if (this.state.page == 'Arrow Shot'){
      page = <ArrowShot />;

      nav =
      <div className="bottom_nav">
        <button className="bottom_nav_left" onClick={(e) => this.changePage('Void Block', e)}>
          <h3>Previous:</h3>
          <h3>Void Block Shader</h3>
        </button>
        <button className="bottom_nav_right" onClick={(e) => this.changePage('Pikachu', e)}>
          <h3>Next:</h3>
          <h3>Pokemon Mystery Dungeon Shader</h3>
        </button>
      </div>;
    }
    else if (this.state.page == 'Void Block'){
      page = <VoidBlock />;

      nav =
      <div className="bottom_nav">
        <button className="bottom_nav_left">
        </button>
        <button className="bottom_nav_right" onClick={(e) => this.changePage('Arrow Shot', e)}>
          <h3>Next:</h3>
          <h3>Arrow Shot Scene</h3>
        </button>
      </div>;
    }

    content =
    <div className="content_wide" ref={this.test}>
      {page}
      {nav}
    </div>;

    if (this.state.page == 'Home'){
      content =
      <div className="sampleContainer_wide" ref={this.test}>
        {previews.map(({id, vidsrc, page, title, date, description}) =>

          <div className="sample_wide">
            <button onClick={(e) => this.changePage(page, e)}>
              <video loop muted autoPlay src={vidsrc}></video>
              <div className= "sample_wide_details">
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p>{description}</p>
              </div>
            </button>
          </div>)
        }
      </div>;
    }

    let main =
      <div className="main_wide">
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

      if (this.state.page == 'Home'){
        content =
        <div className="sampleContainer_narrow" ref={this.test}>
          {previews.map(({id, vidsrc, page}) =>
              <button className="sample_narrow" onClick={(e) => this.changePage(page, e)}>
                <video loop muted autoPlay src={vidsrc}></video>
              </button>
            )
          }
        </div>;
      }

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
