import React from 'react';
import { render, fireEvent, prettyDOM } from 'react-testing-library'
import CommentFeed from './CommentFeed'

const createProps = props => ({
  header: 'Comment Feed',
  auth: {
    name: 'Ian Wilson'
  },
  comments: [
    {
      id: 'comment-0',
      author: 'Ian Wilson',
      text: 'A boats a boat but a mystery box could be anything.',
    },
    {
      id: 'comment-1',
      author: 'Max Powers Jr',
      text: 'Krypton sucks.',
    },
  ],
  createComment: jest.fn(),
  likeComment: jest.fn(),
  ...props
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

  it('allows a user to add a comment', () => {
    const newComment = {author: 'Socrates', text: 'Why?'}
    let props = createProps()
    const { container, getByTestId, getByLabelText, getByText } = render(<CommentFeed {...props} />)

    // const authorNode = getByLabelText('Author')
    // const textNode = getByLabelText('Comment')
    const formNode = container.querySelector('form')


    fireEvent.change(formNode.children[1], { target: {value: newComment.author} })
    fireEvent.change(formNode.children[3], { target: {value: newComment.text} })

    fireEvent.submit(formNode)


    expect(props.createComment).toHaveBeenCalledTimes(1)
    expect(props.createComment).toHaveBeenCalledWith(newComment)
  })

  it('allows a user to like a comment', () => {
    let props = createProps();
    let id = props.comments[1].id
    let { container } = render(<CommentFeed {...props} />)

    let likeNode = container.querySelector(`#${id}`)
    console.log(prettyDOM(likeNode));
    fireEvent.click(likeNode)

    expect(props.likeComment).toHaveBeenCalledTimes(1)
    expect(props.likeComment).toHaveBeenCalledWith(id, props.comments[1].author)

  })
})
