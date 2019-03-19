import React, { Component } from 'react';
import Comment from '../components/Comment'

export default class CommentFeed extends Component {

  renderComments = () => {
    return this.props.comments.map((comment, i) => (
      <Comment key={i} {...comment} />
    ))
  }

  render() {
    const { header } = this.props
    return (
      <div>
        <h2>{header}</h2>
        <div className="comment-list">
          {this.renderComments()}
        </div>
      </div>
    )
  }
}
