import { createContext } from "react";

var PostObject = {

    name: '',
    title: '',
    description: ''

}

export const PostsContext = createContext(PostObject)