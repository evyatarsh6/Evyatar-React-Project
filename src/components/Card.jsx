import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import { GetTodoList } from "../selectors";
import { generateUpdateCardLogs } from '../constans/generalLogs';
import { CardDescriptionField } from './CardDescriptionField';
import { CardMapBtns } from './CardMapBtns';
import { CardTitle } from './CardTitle';
import { CardLocationField } from './CardLocationField';
import { CardImage } from './CardImage';
import { CardChooseDelete } from './CardChooseDeleteContainer';



export const Card = ({ id }) => {

    const cardStyle =  {
        borderColor : 'black',
        borderStyle : 'solid',
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width : 450,
        height :450,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: 16,   
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        border:" 1px solid rgba(255, 255, 255, 0.3)",
        
    }
    
    const dispatch = useDispatch();
    const TODOList = useSelector(GetTodoList)
    const currCardInfo = TODOList[id]

    useEffect(() => {
        console.log(generateUpdateCardLogs(currCardInfo))
    }, [currCardInfo])


    return (
            
        <div className ={"card"} id={currCardInfo.id} style={cardStyle}>
            <CardMapBtns id={currCardInfo.id} />
            <CardTitle id={currCardInfo.id}/>
            <CardLocationField id={currCardInfo.id} />
            <CardImage id={currCardInfo.id}/>
            <CardDescriptionField id={currCardInfo.id}/>
            <CardChooseDelete id={currCardInfo.id}/>
        </div>
    )
}; 