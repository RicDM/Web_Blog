import { useState } from 'react';
import './App.css';
import { PostsContext } from './Context/PostsContext';
import { NameContext } from './Context/NameContext';
import { TitleContext } from './Context/TitleContext';
import { DescriptionContext } from './Context/DescriptionContext';
import Post from './Components/Post';
import Forms from './Components/Forms';
import Header from './Components/Header';

function App() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <Header />
      <PostsContext.Provider value={{ posts, setPosts }}>
        <NameContext.Provider value={{ name, setName }}>
          <TitleContext.Provider value={{ title, setTitle }}>
            <DescriptionContext.Provider value={{ description, setDescription }}>
              <Forms />
              <Post />
            </DescriptionContext.Provider>
          </TitleContext.Provider>
        </NameContext.Provider>
      </PostsContext.Provider>
    </div>
  );
}

export default App;
