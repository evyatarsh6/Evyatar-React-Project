import { Button } from '@mui/material'
import { constans } from '../../constans/constans'
import useFilterKind from '../../hooks/useFilterKind'
import React from 'react'

export const DeleteTODOSBtn = ({ style }) => {
    const { updateFilterKind, filterKindBtnStatus } = useFilterKind()

    return (

        <Button
            sx={{
                '&[data-testid]': {
                    cyId: 'avi'
                }
            }}
            data-testid="avi"
            variant="contained"
            id={'show-delete-items-btn'}
            className='show-delete-items-btn'
            onClick={() => updateFilterKind(constans.deleteFilterKind)}
            style={style}
        >
            {`${filterKindBtnStatus(constans.deleteFilterKind)} show delete items`}
        </Button>
    )
}
