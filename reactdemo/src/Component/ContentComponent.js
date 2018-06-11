import React, { Component } from 'react';
import ReactDom from 'react-dom'

class ContentComponent extends Component {



  render() {

    let data = this.props.data
    let bulletpts 
    
    bulletpts = data.bulletpts.map(bulletpt => {
      return (<li align='left'>{bulletpt}</li>);
    })



    return (
      <div className="content">
        <div className="row">
          <div className="col-xs-6">{data.institute}</div>
          <div className="col-xs-6">{data.duration}</div>
          <div className="col-xs-6">{data.title}</div>
        </div>

          <br/>
          <br/>
          <div className="row">
          <div className="col-xs-1" />
          <div className="col-xs-10">
            <ul>
              {bulletpts}
            </ul>
          </div>
          <div className="col-xs-1" />
        </div>
      </div>
    );
  }
}

export default ContentComponent;
