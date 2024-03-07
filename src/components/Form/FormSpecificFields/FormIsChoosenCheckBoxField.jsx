import React from 'react'
import { FormCheckBoxField } from '../FormGenericFields/FormCheckBoxField'
import { FormControlLabel } from '@mui/material'

export const FormIsChoosenCheckBoxField = ({ control }) => (
    <FormControlLabel
        sx={{
            marginTop: 3
        }}

        control={
            <FormCheckBoxField control={control} name={'isChoosenCheckbox'} />
        }
        label="isChoosen"
    />

)
