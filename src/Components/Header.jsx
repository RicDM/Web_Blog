// props: {author:"", content:""}

export function Header(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    );
}

// defualt export vs named export