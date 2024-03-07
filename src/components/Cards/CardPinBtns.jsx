import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetMapPoints } from '../../selectors'
import { IconButton } from '@mui/material'
import { TODOListActions, MapActions, updateTooltipStatus } from '../../actions/actions'
import PushPinIcon from '@mui/icons-material/PushPin'
import SaveIcon from '@mui/icons-material/Save'
import ClearIcon from '@mui/icons-material/Clear'
import { useMutateFieldSingle } from '../../hooks/useMutateData'

export const CardPinBtn = ({ isPinBtnDisable, _id }) => {
    const dispatch = useDispatch()

    const mapPoints = useSelector(GetMapPoints)
    const mutateSingleUpdateField = useMutateFieldSingle()
    const mutateFieldFunc = mutateSingleUpdateField.mutate
    const { activeMode, cancelMode } = MapActions.mapPinTODOMode
    const { editTODO, editAllTODOS } = TODOListActions

    const [isPinActive, setIsPinActive] = useState(isPinBtnDisable)

    const UpdateTODOSAfterClickPinBtn = () => {
        dispatch(editAllTODOS(
            {
                fieldKey: 'isPinBtnDisable',
                fieldUpdateValue: true
            }
        ))

        dispatch(editTODO(
            {
                _id,
                fieldKey: 'isPinBtnDisable',
                fieldUpdateValue: false
            }
        ))
    }

    const clickPinBtn = async () => {
        UpdateTODOSAfterClickPinBtn()

        setIsPinActive(true)
        dispatch(activeMode(_id))
    }
    const clickCancelPin = useCallback(async () => {
        setIsPinActive(false)

        dispatch(cancelMode())
        dispatch(updateTooltipStatus(false))

        dispatch(editAllTODOS(
            {
                fieldKey: 'isPinBtnDisable',
                fieldUpdateValue: false
            }
        ))
    }, [dispatch])

    const clickSavePin = useCallback(async () => {
        clickCancelPin()
        mutateFieldFunc(
            {
                wantedID: _id,
                wantedField: 'location',
                wantedFieldUpdateVal: mapPoints[_id]?.location || []
            }
        )

        dispatch(editTODO(
            {
                _id,
                fieldKey: 'location',
                fieldUpdateValue: mapPoints[_id].location
            }
        ))
    }, [clickCancelPin, dispatch, _id, mapPoints, mutateFieldFunc])

    return (
        isPinActive
            ? (
                <div className='handle-pin-btns'>
                    <IconButton className='clear-pin-btn' style={{ scale: '1.5' }}
                        onClick={clickCancelPin}
                    >
                        <ClearIcon />
                    </IconButton>

                    <IconButton className='save-pin-btn' style={{ scale: '1.5' }}
                        onClick={clickSavePin}
                    >
                        <SaveIcon />
                    </IconButton>
                </div>
            )
            : (
                <div className='handle-pin-btns'>
                    <IconButton className='pin-btn' style={{ scale: '1.5' }}
                        onClick={clickPinBtn} disabled={isPinBtnDisable}>
                        <PushPinIcon />
                    </IconButton>
                </div>
            )
    )
}
