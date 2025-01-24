import { createContext } from "react";

var NameObject = {
    name: '',
    setName: (n) => {}
}

export const NameContext = createContext(NameObject)