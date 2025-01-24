import { useContext } from "react";
import { NameContext } from "../Context/NameContext";
import { TitleContext } from "../Context/TitleContext";
import { DescriptionContext } from "../Context/DescriptionContext";
import { PostsContext } from "../Context/PostsContext";

export function Forms() {

  const posts = useContext(PostsContext)
  const name = useContext(NameContext)
  const title = useContext(TitleContext)
  const description = useContext(DescriptionContext)

    return (
        <div>
          <h1>Crie um novo post</h1>
          <input 
            value={InputName}
            onChange={e => name.setName(e.target.value)}
          />
          <input 
            value={InputTitle}
            onChange={e => title.setTitle(e.target.value)}
          />
          <input 
            value={InputDescription}
            onChange={e => description.setDescription(e.target.value)}
          />
          <button onClick={() => {
            posts.setList([...posts,{name : InputName, title : InputTitle, description : InputDescription}])
          }}>Enviar</button>
        </div>
    );
}

// defualt export vs named export