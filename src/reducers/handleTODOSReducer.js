import React from "react"
import { useState } from "react"
import { useId } from "react";



    //  const TODOStruct = {${action.ID}: ${action.isChoosen} : ${action.isDeleted}}
    //  const TODOExample = {
        //{'12': 'false' : 'false'} : 
        // //{
        //     kind: action.newTODO.TODOKind,
        //     isChoosen: false,
        //     isDeleted: false  
        // }


    const filterChoosenTODOS = TODO => {
        if(Object.keys(TODO)[0].includes('* : true : *')) {
            return TODO
        }
    }
    
    const filterDeleteTODOS = TODO => {

        if(Object.keys(TODO)[0].includes('* : * : true')) {
            return TODO
        }
    }

    const filterTODOS = (TODOS,action) => {

        const filterTODOSObj = Object.keys(TODOS).filter( TODO  => {

            if (action.type === "filterChoosenTODOS" ) {
                filterChoosenTODOS(TODO) 
            }
            else if (action.type === "filterDeleteTODOS") {
                filterDeleteTODOS(TODO)
            }
        })
        return filterTODOSObj
    }


    export const TODOReducer = (state, action) =>  {

        switch (action.type) {
            case "addTODO":
                return {
                    ...state,
                    [`${action.ID}: ${action.isChoosen} : ${action.isDeleted} `]: {
                        kind: action.newTODO.TODOKind,
                        isChoosen: false,
                        isDeleted: false
                    }
                };

            case "deleteTODO":
                return {
                    ...state, 
                    [state.ID]:
                    state.ID.isDeleted = true
                };

            case ("filterChoosenTODOS" || "filterDeleteTODOS"):

                return filterTODOS(state, action)

            default:
                return state; 
        }
    
    }