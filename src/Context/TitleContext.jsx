import { createContext } from "react";

var TitleObject = {
    title: '',
    setTitle: (n) => {}
}

export const TitleContext = createContext(TitleObject)