import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'

function App() {

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [posts, setPosts] = useState([])

  return (
    <>
      <div>
        <div>
          <Header/>
        </div>
        {/* <Post/>
        <Forms /> */}
        <div>
          <Header/>
        </div>
      </div>
    </>
  )
}

export default App
