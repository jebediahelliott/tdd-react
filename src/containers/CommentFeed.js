import React, { Component } from 'react';
import Comment from '../components/Comment'

export default class CommentFeed extends Component {

  state = {
    author: '',
    text: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { author, text } = this.state
    this.props.createComment({ author, text })
  }

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
        <form className="comment-form" data-testid="form" onSubmit={this.handleSubmit}>
          <label htmlFor="author">
            Author
          </label>
          <input id="author" value={this.state.author} type="text" onChange={this.handleChange} />
          <label htmlFor="text">
            Comment
          </label>
          <input id="text" value={this.state.text} type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit Comment" />
        </form>
        <div className="comment-list">
          {this.renderComments()}
        </div>
      </div>
    )
  }
}
