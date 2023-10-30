import { Item } from "../components/Item";
import React from "react";


export const ItemList = ({status}) => {
    

    return (
    <ul id= "list">
        <Item
        name= 'watching a funny TICTOK video'
        status = {status}
        >

        </Item>
    </ul>
    )
}