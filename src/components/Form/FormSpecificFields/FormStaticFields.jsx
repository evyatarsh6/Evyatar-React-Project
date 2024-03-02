import TextField from '@mui/material/TextField'
import DialogContentText from '@mui/material/DialogContentText'
import { useSelector } from 'react-redux'
import { GetFormTODOKind } from '../../../selectors'
import { Autocomplete } from '@mui/material'

import React from 'react'

export const FormStaticFields = () => {
    const TODOKind = useSelector(GetFormTODOKind)

    return (
        <>
            <DialogContentText margin={1}>
                To create new Avi Berger TODO to this website, enter the wanted info .
            </DialogContentText>

            <DialogContentText marginTop={5} marginBottom={0.5}>
                TODO kind
            </DialogContentText>

            <Autocomplete
                margin={5}
                disabled
                disablePortal
                inputValue={TODOKind}
                renderInput={params => <TextField {...params}
                />}
            >
            </Autocomplete>
        </>
    )
}
