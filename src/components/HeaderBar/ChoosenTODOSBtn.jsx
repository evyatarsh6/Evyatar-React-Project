import React from 'react'
import { Button } from '@mui/material'
import { constants } from '../../constants/constants'
import useFilterKind from '../../hooks/useFilterKind'

export const ChoosenTODOSBtn = ({ style }) => {
    const { updateFilterKind, filterKindBtnStatus } = useFilterKind()

    return (

        <Button
            variant="contained"
            id={'show-choosen-items-btn'}
            className='show-choosen-items-btn'
            onClick={() => updateFilterKind(constants.choosenFilterKind)}
            style={style}>
            {`${filterKindBtnStatus(constants.choosenFilterKind)} show choosen items`}
        </Button>
    )
}
