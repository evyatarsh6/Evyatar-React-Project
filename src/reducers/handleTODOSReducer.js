
    //  const TODOStruct = {${action.ID}: ${action.isChoosen} : ${action.isDeleted}}
    //  const TODOExample = {
        //{'12': 'false' : 'false'} : 
        // //{
        //     kind: action.newTODO.TODOKind,
        //     isChoosen: false,
        //     isDeleted: false  
        // }


    const filterTODOSByReg = (TODO, reg) => {
        if (reg.test(Object.keys(TODO)[0])) {
            return TODO
        }
    }

    const filterTODOS = (TODOS,action) => {

        const filterTODOSObj = Object.keys(TODOS).filter( TODO  => {

            if (action.type === "filterChoosenTODOS" ) {
                const choosenRegExpre = / * : true : */
                filterTODOSByReg(TODO, choosenRegExpre ) 
            }
            else if (action.type === "filterDeleteTODOS") {
                const deleteRegExpre = / * : * : true/
                filterTODOSByReg(TODO, deleteRegExpre)
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