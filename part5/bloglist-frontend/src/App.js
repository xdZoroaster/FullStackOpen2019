import React, { useState, useEffect } from 'react';
import loginService from './services/login'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'

function App() {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  // get all blogs
  useEffect(() => {
    const getBlogs = async () => {
      const blogs = await blogService.getAll();
      setBlogs(blogs)
    }
    getBlogs();
  }, [])

  // get user details from local storage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async e => {
    e.preventDefault()
    // console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      console.log(window.localStorage)

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
      console.log('Invalid credentials')
    }
  }

  const handleLogout = async () => {
    window.localStorage.removeItem('loggedUser')
    setUser(null)
  }

  const renderItems = () => blogs.map((blog, i) =>
    <Blog
      key={i}
      blog={blog}
    />
  )

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          password={password}
          setUsername={({ target }) => setUsername(target.value)}
          setPassword={({ target }) => setPassword(target.value)}
        />
      </div>
    )
  }

  return (
    <div>
      <h1>Blogs</h1>

      <div>
        {user.name} logged in
        <button onClick={handleLogout}>logout</button>
      </div>
      <ul>
        {renderItems()}
      </ul>
    </div>
  );
}

export default App;
