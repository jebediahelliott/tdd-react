import React, { Component } from 'react';
import { render } from 'react-testing-library'
import CommentFeed from './CommentFeed'

describe('CommentFeed', () => {

  const props = {header: 'Comment Feed', comments: []}

  it('renders the CommentFeed', () => {
    const { queryByText } = render(<CommentFeed {...props} />)
    const header = queryByText('Comment Feed')
    expect(header.innerHTML).toBe('Comment Feed')
  })

  it('renders the comment list', () => {
    const { container } = render(<CommentFeed {...props} />)
    const commentNodes = container.querySelectorAll('.Comment')
    expect(commentNodes.length).toBe(props.comments.length)
  })
})
