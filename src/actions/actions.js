

export const FormActions =  {
        openForm: (_id,TODOKind) => {
            return {
                type: 'openForm',
                TODOID: _id,
                TODOKind: TODOKind 
            }
        },

        closeForm : () => {
            return {
                type: 'closeForm'
            }
        }
    }

export const TODOListActions = {

        addTODO: TODO => {
            return {
                type:  'addTODO',
                TODO: TODO
            }
        },

        editTODO : props => {
            return {
                type: "editTODO",
                props
            }
        },

        editAllTODOS : props => {
            return {
                type: "editAllTODOS",
                fieldUpdateValue: props.fieldUpdateValue,
                fieldKey: props.fieldKey
            } 
        }
    }

export const changeFilterKind = (filterKind) => {
    return {
        type:"switchFilterKind",
        updateStatus: filterKind
    }
}

export const handleInputType = updateInputValue => {
    return {
        type:'handleInputType',
        updateInputValue: updateInputValue
    }
}


export const MapActions = {

        mapPinTODOMode: {
            activeMode: id => {
                return {
                    type:"activeMapPinMode",
                    activeTODOID: id
                }
            },

            cancelMode:  () => {
                return {
                    type:"cancelMapPinMode",
                }
            }
        },

        mapShowPointsMode: {
            activeMode: () => {
                return {
                    type:"activeShowMapPointsMode"
                }
            },

            cancelMode: () => {
                return {
                    type:"activeClearMapPointsMode"
                }
            }
        },

        updatePoint: (TODOID, location) => {
    
            return {
                type:"updatePoint",
                TODOID:TODOID,
                location: location
            }
        },

        focusWantedTODO:  location => {
            return {
                type:"focusWantedTODO",
                location: location
            }
        }  
    }


export const updateTooltipStatus= (tooltipStatus) => {
    return {
        type: "updateTooltipStatus",
        isShownStatus: tooltipStatus
    }
}

