import React from 'react'
import PropTypes from 'prop-types'
import { useField } from '../hooks'
import { Button, Input } from './styles/styles'

const BlogForm = (props) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('url')

  const handleSubmit = e => {
    e.preventDefault()
    props.addBlog({
      title: title.value,
      author: author.value,
      url: url.value
    })
    title.reset()
    author.reset()
    url.reset()
  }

  return (
    <>
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <Input {...title} reset={null} id="blog-title" />
        </div>

        <div>
          Author: <Input {...author} reset={null} id="blog-author" />
        </div>
        <div>
          URL: <Input {...url} reset={null} id="blog-url" />
        </div>
        <Button primary type="submit" id="blog-submit">Add</Button>
      </form>
    </>
  )
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
}

export default BlogForm