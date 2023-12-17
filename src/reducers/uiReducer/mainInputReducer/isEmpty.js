import { inputValue } from "./inputValue"

const initialState  = true

export const isEmpty = () => {
    if (inputValue !== '') {
        return false
    }
    else{
        return initialState
    }
}