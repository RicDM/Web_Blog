import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { PostsContext } from './Context/PostsContext'

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
        <div>
        <PostsContext.Provider value={{posts, setPosts}}>
          <NameContext.Provider value={{name, setName}}>
            <TitleContext.Provider value={{Title, setTitle}}>
              <DescriptionContext.Provider value={{description, setDescription}}>
                <Post/>
                <Forms/>
              </DescriptionContext.Provider>
            </TitleContext.Provider>
          </NameContext.Provider>
        </PostsContext.Provider>
        </div>
        <div>
          <Header/>
        </div>
      </div>
    </>
  )
}

export default App
