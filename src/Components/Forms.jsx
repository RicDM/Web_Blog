
export function Forms(props) {

    return (
        <div>
          <h1>Crie um novo post</h1>
          <input 
            value={InputName}
            onChange={e => setName(e.target.value)}
          />
          <input 
            value={InputTitle}
            onChange={e => setTitle(e.target.value)}
          />
          <input 
            value={InputDescription}
            onChange={e => setDescription(e.target.value)}
          />
          <button onClick={() => {
            posts.setPosts([...posts,{name : InputName, title : InputTitle, description : InputDescription}])
          }}>Enviar</button>
        </div>
    );
}

// defualt export vs named export