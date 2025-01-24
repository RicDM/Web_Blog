import { createContext } from "react";

var PostsObject = {
    posts:[],
    setPosts:(n) => {}
}

export const PostsContext = createContext(PostsObject)