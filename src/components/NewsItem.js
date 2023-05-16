import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title,discription,imgurl ,newsurl,author,date,source}=this.props
    return (
      <div className='my-3'>
     <div className="card mb-4" >
     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'50%' ,zIndex:'1'}}>{source}
  </span>


  <img src={!imgurl ? "https://www.reuters.com/resizer/wv2FHvd-pkHPdhgrXq-jRe4k2D4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2WSX7ENRJVPJTLINN3FWVSSWTE.jpg" : imgurl} alt="Not Found' "  className="card-img-top"/>

  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author } on {new Date(date).toUTCString()}</small></p>
    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark btn btn-sm" >Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
