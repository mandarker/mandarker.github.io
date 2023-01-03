import React from 'react';
import './App.css';

import Home from './pages/Home'
import Blog from './pages/Blog'

import twitter from './smicons/twitter.png';
import linkedin from './smicons/linkedin.png';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0,
      scrollY: 0,
      menuExpand: false,
      page: "Home"
    };

    this.refList = {
      homeRef : React.createRef(),
      portfolioRef : React.createRef(),
      aboutRef : React.createRef()
    };

    window.addEventListener("resize", this.update);
    window.addEventListener("scroll", this.update);

    this.changePage = this.changePage.bind(this);
    this.test = React.createRef();
  }

  componentDidMount() {
    this.update();
  }

  update = () => {this.setState({height: window.innerHeight, width: window.innerWidth, scrollY: window.scrollY});};

  changePage(p, e) {
    e.preventDefault();
    this.setState(state => ({page: p, menuExpand: false}));

    if (p != "Blog"){
      let el;

      switch(p){
        case "Home":
          el = this.refList.homeRef;
          break;
        case "Portfolio":
          el = this.refList.portfolioRef;
          break;
        case "About":
          el = this.refList.aboutRef;
          break;
      }
      
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: el.current.offsetTop - 60
      });
    }
  }

  render() {
    let header =
    <header className={this.state.scrollY != 0 || this.state.page == "Blog" ? "header_wide" : "header_wide_down"}>
      <div className="header_container">
        <h1>Spring Nguyen |</h1>
        <h4>Technical Artist and Software Engineer</h4>
      </div>
      <div className="header_container">
        <button onClick={(e) => this.changePage("Home", e)}><h2>Home</h2></button>
        <button onClick={(e) => this.changePage("Portfolio", e)}><h2>Portfolio</h2></button>
        <button onClick={(e) => this.changePage("About", e)}><h2>About</h2></button>
        <button><a href='blogpages/blogmain.html'><h2>Blog</h2></a></button>
        <a href="https://twitter.com/realmandarker"><img src={twitter}></img></a>
        <a href="https://www.linkedin.com/in/springn/"><img src={linkedin}></img></a>
      </div>
    </header>;

    let content;
    let page;

    switch (this.state.page)
    {
      case 'Home':
      case 'Portfolio':
      case 'About':
        page = <Home refList={this.refList} changePage={this.changePage}/>;
        break;
      case 'Blog':
        page = <Blog />;
        break;
    }

    content =
    <div className="content_wide" ref={this.test}>
      {page}
    </div>;

    let main =
      <div className="main">
        {header}
        {content}
      </div>;


    return (
      main
    );
  }
}

export default App;
