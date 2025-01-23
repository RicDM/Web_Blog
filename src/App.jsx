import { useState } from 'react'
import './App.css'
import { Post } from './Components/Post'
import { Forms } from './Components/Forms'

function App() {

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [posts, setPosts] = useState([])

  return (
    <>
      <div>
        <Post/>
        <Forms />
      </div>
    </>
  )
}

export default App
