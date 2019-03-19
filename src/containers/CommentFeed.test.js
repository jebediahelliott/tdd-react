import React, { Component } from 'react';
import { render } from 'react-testing-library'
import CommentFeed from './CommentFeed'

const createProps = props => ({
header: 'Comment Feed',
comments: [
  {
    author: 'Ian Wilson',
    text: 'A boats a boat but a mystery box could be anything.',
  },
  {
    author: 'Max Powers Jr',
    text: 'Krypton sucks.',
  },
],
createComment: jest.fn(),
...props,
})

describe('CommentFeed', () => {
  it('renders the CommentFeed', () => {
    let props = createProps()
    const { queryByText } = render(<CommentFeed {...props} />)
    const header = queryByText('Comment Feed')
    expect(header.innerHTML).toBe('Comment Feed')
  })

  it('renders the comment list', () => {
    let props = createProps()
    const { container } = render(<CommentFeed {...props} />)
    const commentNodes = container.querySelectorAll('.Comment')
    expect(commentNodes.length).toBe(props.comments.length)
  })

  it('renders the comment list with some entries', () => {
    let props = createProps()
    const {container} = render(<CommentFeed {...props} />)
    const commentNodes = container.querySelectorAll('.Comment')
    expect(commentNodes.length).toBe(props.comments.length)
  })
})
