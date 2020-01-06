import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  // console.log(props)
  // const { blog, user, likeBlog, deleteBlog } = props
  // const [expand, setExpand] = useState(false)

  return (
    <li>
      <Link to={`/blogs/${props.blog.id}`}>{props.blog.title}</Link>
    </li>

//     <li onClick={() => setExpand(!expand)} className="blogInfo">
//       <strong>{blog.title}.</strong> {blog.author}
//       {expand ? (
//         <ul>
//           <li>url: <a href={blog.url}>{blog.url}</a></li>
//           <li>
//             likes: {blog.likes}
//             <button className="btn btn-like" onClick={handleLikeClick}>
//               <span role="img" aria-label="like">&#128077;</span>
//             </button>
//           </li>
//           {blog.user && <li>added by: {blog.user.name}</li>}
//           {blog.user && (user.username === blog.user.username) ?
//             <button className="btn btn-delete" onClick={() => deleteBlog(blog)}>Delete</button>
//             : null}
//         </ul>
//       ) : null}
//     </li>
  )
}

// Blog.propTypes = {
//   blog: PropTypes.object.isRequired,
//   user: PropTypes.object.isRequired,
//   likeBlog: PropTypes.func.isRequired,
//   deleteBlog: PropTypes.func.isRequired,
// }

export default Blog