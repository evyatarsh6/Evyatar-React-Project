import { inputValue } from "./inputValue"

const initialState  = true

export const isEmpty = () => {
    if (inputValue.length !== 0) {
        return false
    }
    else{
        return initialState
    }
}