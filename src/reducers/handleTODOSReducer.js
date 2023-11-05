import React from "react"
import { useState } from "react"
import { useId } from "react";
import { searchForWorkspaceRoot } from "vite";



let newMissionid = '12'
let singleMission = { newTODO.TODOID : { kind : newTODO.TODOKind, isChoosen: false, isDeleted : false }}
const actionexample = {type: "addTODO", actionProps : {"newTODOMissionid": newMissionid ,"newTODOInfo": singleMission}}

    export const TODOReducer = (state, action) =>  {

        switch (action.type) {
            case "addTODO":
                return {
                    ...state,
                    [action.ID]: {
                        kind: newTODO.TODOKind,
                        isChoosen: false,
                        isDeleted: false
                    }
                };

            case "deleteTODO":
                return {
                    ...state, 
                    [action.ID]:
                    isDeleted = true
                };

                
            // const singleMission = { newTODO.TODOID : { kind : newTODO.TODOKind, isChoosen: false, isDeleted : false }}
                
        
            // case "filterTODOS":
            //     return {
            //         ...state,
            //         [Object.keys(state).forEach($elem => {
            //             if (state[$elem].isChoosen) {
                            
            //             }
            //         })]
                       
                    

                // }

            default:
                return state; 
        }
    
    }
    
    
    





//     const singleMission = { newTODO.TODOID : { kind : newTODO.TODOKind, isChoosen: false, isDeleted : false }}

//     const action = {type: "addTODO", actionProps : {"newTODOMissionid": newMissionid ,"newTODOInfo": singleMission}}

// const addTODO = (state, action) => {


    // return  (...missions, action["actionProps"]["newTODOMissionid"]: { action["newTODOInfo"].newMissionid } )

    // setMissions(...missions, action["actionProps"]["newTODOMissionid"]: { action["newTODOInfo"].newMissionid } )
// }