import React from 'react';
import './blog.css';

import previews from '../previews';

// import all pages here
import CurveEditorv2 from './Blog/Curve Editor v2';
import CurveEditor from './Blog/Curve Editor';
import IAIDO from './Blog/IAIDO';
import ArrowShot from './Blog/Arrow Shot';
import Colormancy from './Blog/Colormancy1';

class Blog extends React.Component {
  constructor() {
    super();

    this.state = {
        pageID : 0
    };

    this.reactPages = [
        <CurveEditorv2 />,
        <IAIDO />,
        <CurveEditor />,
        <ArrowShot />,
        <ArrowShot />,
        <ArrowShot />,
        <ArrowShot />,
        <ArrowShot />,
        <ArrowShot />,
        <ArrowShot />,
    ];
  }

  changeBlogPage(p, e) {
    e.preventDefault();
    this.setState(state => ({pageID: p}));

    window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: 0
      });
  }

  render() {
    let blog;

    if (this.state.pageID != 0){
        blog = 
        <div className="page">
            <a onClick={(e) => this.changeBlogPage(0, e)}>back to blog main</a>
            {
                this.reactPages[this.state.pageID - 1]
            }
        </div>;
    }
    else{
        blog = 
        <div className="page">
          <div className="blogPreviewContainer">
            <a onClick={(e) => this.props.changePage("Portfolio", e)}>&lt; back to home</a>
            {
                previews.map(({id, vidsrc, title, date, description}) =>
                    <div className="blogPreviewBlock">
                        <video src={vidsrc} muted autoPlay></video>
                        <h1>{title}</h1>
                        <h2>{date}</h2>
                        <p>{description}</p>
                        <button onClick={(e) => this.changeBlogPage(id, e)}>Read More...</button>
                    </div>)
            }
          </div>
        </div>;
    }

    return (
      <div className="page">
        {blog}
      </div>
    );
  }
}

export default Blog;
