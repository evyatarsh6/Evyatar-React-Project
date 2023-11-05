import React from "react"
import { useState } from "react"
import { useId } from "react";


export const addTODOReducer = (missions, { newTODO: { TODOKind ="calling his mother", TODOID: newTODOID }} ) => {

    const singleMission = { newTODO.TODOID : { kind : newTODO.TODOKind, isChoosen: false, isDeleted : false }}
    const action = {"type": "addTODO", "actionProps" : {"newTODOMissionid": newMissionid ,"newTODOInfo": singleMission}}}

const addTODO = (state, action) => {

    setMissions(...missions, action["actionProps"]["newTODOMissionid"]: { action["newTODOInfo"].newMissionid } )
}

return  missions
