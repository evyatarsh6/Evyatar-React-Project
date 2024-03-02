import { TextField } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'
import React from 'react'

export const FormTextInputField = ({ name, control, rulesObj }) => {
    const { setValue } = useFormContext()

    const updateFieldValue = (wantedField, updateValue) => setValue(`${wantedField}`, updateValue)

    const updateDescriptionFieldValue = e => updateFieldValue(name, e.target.value)

    const { field } = useController({
        name,
        control,
        rules: rulesObj
    })

    return (
        <TextField
            onChange={updateDescriptionFieldValue}
            value={field.value}
            name={field.name}
            inputRef={field.ref}
            margin="dense"
            id="description-field"
            label="description"
            type="text"
            fullWidth
            variant="standard"
        />
    )
}
