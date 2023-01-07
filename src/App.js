import React from 'react';
import './App.css';

import Home from './pages/Home'
import Blog from './pages/Blog'

import twitter from './images/smicons/twitter.png';
import linkedin from './images/smicons/linkedin.png';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page: "Home"
    };

    this.refList = {
      homeRef : React.createRef(),
      portfolioRef : React.createRef(),
      aboutRef : React.createRef()
    };

    this.changePage = this.changePage.bind(this);
    this.test = React.createRef();
  }

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

      if (el.current == null){
        window.scrollTo({
          behavior: "smooth",
          left: 0,
          top: 0
        });
      }
      else{
        window.scrollTo({
          behavior: "smooth",
          left: 0,
          top: el.current.offsetTop - 60
        });
      }
    }
    else
    {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: 0
      });

      console.log("what");
    }
  }

  render() {
    let header;
    let pageDirectories;

    if (this.state.page == "Blog"){
      pageDirectories =
      <div className="header_container">
        <button onClick={(e) => this.changePage("Home", e)}><h2>Home</h2></button>
        <a href="https://twitter.com/realmandarker"><img src={twitter}></img></a>
        <a href="https://www.linkedin.com/in/springn/"><img src={linkedin}></img></a>
      </div>;
    }
    else{
      pageDirectories =
      <div className="header_container">
        <button onClick={(e) => this.changePage("Home", e)}><h2>Home</h2></button>
        <button onClick={(e) => this.changePage("Portfolio", e)}><h2>Portfolio</h2></button>
        <button onClick={(e) => this.changePage("About", e)}><h2>About</h2></button>
        <button onClick={(e) => this.changePage("Blog", e)}><h2>Blog</h2></button>
        <a href="https://twitter.com/realmandarker"><img src={twitter}></img></a>
        <a href="https://www.linkedin.com/in/springn/"><img src={linkedin}></img></a>
      </div>;
    }

    let headerClass;

    if (this.state.page == "Blog"){
      headerClass = "header_blog";
    }
    else if (this.state.scrollY != 0){
      headerClass = "header_wide";
    }
    else{
      headerClass = "header_wide_down";
    }

    header =
    <header className= {headerClass}>
      <div className="header_container">
        <h1>Spring Nguyen |</h1>
        <h4>Technical Artist and Software Engineer</h4>
      </div>
      {pageDirectories}
    </header>;

    if (this.state.page == "Blog"){
      header =
      <header className={headerClass} onClick={(e) => this.changePage("Home", e)}>
        <div className="header_container">
          <h1>Spring Nguyen |</h1>
          <h4>Technical Artist and Software Engineer</h4>
        </div>
      </header>;
    }

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
        page = <Blog refList={this.refList} changePage={this.changePage}/>;
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
