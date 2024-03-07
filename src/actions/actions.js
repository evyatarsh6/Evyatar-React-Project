export const FormActions = {
    openForm: (_id, TODOKind) => ({
        type: 'openForm',
        TODOID: _id,
        TODOKind
    }),

    closeForm: () => ({
        type: 'closeForm'
    })
}

export const TODOListActions = {

    addTODO: TODO => ({
        type: 'addTODO',
        TODO
    }),

    editTODO: props => ({
        type: 'editTODO',
        props
    }),

    editAllTODOS: props => ({
        type: 'editAllTODOS',
        fieldUpdateValue: props.fieldUpdateValue,
        fieldKey: props.fieldKey
    })
}

export const changeFilterKind = filterKind => ({
    type: 'switchFilterKind',
    updateStatus: filterKind
})

export const handleInputType = updateInputValue => ({
    type: 'handleInputType',
    updateInputValue
})

export const MapActions = {

    mapPinTODOMode: {
        activeMode: id => ({
            type: 'activeMapPinMode',
            activeTODOID: id
        }),

        cancelMode: () => ({
            type: 'cancelMapPinMode'
        })
    },

    mapShowPointsMode: {
        activeMode: () => ({
            type: 'activeShowMapPointsMode'
        }),

        cancelMode: () => ({
            type: 'activeClearMapPointsMode'
        })
    },

    updatePoint: (TODOID, location) => ({
        type: 'updatePoint',
        TODOID,
        location
    }),

    focusWantedTODO: location => ({
        type: 'focusWantedTODO',
        location
    })
}

export const updateTooltipStatus = tooltipStatus => ({
    type: 'updateTooltipStatus',
    isShownStatus: tooltipStatus
})
