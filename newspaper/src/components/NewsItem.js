import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  static propTypes = {}

  render() {
    let {title,description,textUrl} = this.props;
    return <>
<div className='container my-4 mx-1'><h3>This is a News Item component.</h3></div>
<div className='container'>
<div  className="card" style={{width: "18rem"}}>
  <img src={textUrl}  className="" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <a href="/"  className="btn btn-sm btn-primary">Read more...</a>
  </div>
</div>
</div>
    </>
  }
}

export default NewsItem