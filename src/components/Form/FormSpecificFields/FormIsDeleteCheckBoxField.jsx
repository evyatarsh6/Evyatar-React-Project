import React from 'react'
import { FormCheckBoxField } from '../FormGenericFields/FormCheckBoxField'
import { FormControlLabel } from '@mui/material'

export const FormIsDeleteCheckBoxField = ({ control }) => (

    <FormControlLabel
        sx={{
            display: 'block',
            marginTop: 2,
            marginBottom: 2
        }}
        control={
            <FormCheckBoxField control={control} name={'isDelete'} />
        }
        label="isDelete"
    />
)
