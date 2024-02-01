
export const GetTODOList = state =>  state.TODOList

export const GetFilterKind = state => state.filterKind

export const GetMainInput = state => state.mainInput

export const GetMainInputValue = state => GetMainInput(state).inputValue

export const GetMainInputIsEmpty = state => GetMainInput(state).isEmpty


export const GetFormDetails = state => state.formDetails

export const GetFormTODOKind = state => GetFormDetails(state).TODOKind

export const GetFormTODOID = state => GetFormDetails(state).TODOID




export const GetMapPinModeData = state => state.Map.mode.pinMode

export const GetMapPinModeIsActive = state => GetMapPinModeData(state).PinMode

export const GetMapPinModeActiveTODOID = state => GetMapPinModeData(state).activeTODOID



export const GetMapShowPointsMode = state => state.Map.mode.showPointsMode

export const GetTooltipStatus = state => state.Map.mode.tooltipStatus

export const GetMapPoints = state => state.Map.points

export const GetCurrViewInfo = state => state.Map.currViewInfo

export const GetMapLocation = state => state.Map.currLocation




