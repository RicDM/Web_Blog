import { createContext } from "react";

var DescriptionObject = {
    description: '',
    setDescription: (n) => {}
}

export const DescriptionContext = createContext(DescriptionObject)