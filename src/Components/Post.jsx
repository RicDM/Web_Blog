// props: {author:"", content:""}
import { useContext } from "react";
import { PostsContext } from "../Context/PostsContext";


export function Post() {

    const posts = useContext(PostsContext)
  
    return (

      <ul>
        {posts.map(post => (
          <div>
          <h1>{post.name}</h1>
          <p>{post.title}</p>
          <p>{post.description}</p>
        </div>
          
        ))}
      </ul>

    );
}

// defualt export vs named export