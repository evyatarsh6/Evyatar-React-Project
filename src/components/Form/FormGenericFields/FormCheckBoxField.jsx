import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Checkbox } from '@mui/material'

export const FormCheckBoxField = ({ name, control }) => {
    const { setValue } = useFormContext()

    const { field } = useController({
        control,
        name
    })

    const updateFieldValue = updateValue => setValue(`${field.name}`, updateValue)

    return (
        <Checkbox
            onChange={() => {
                updateFieldValue(!field.value)
            }}
            key={field.name}
            checked={field.value}
            type="checkbox"
            value={field.value}
        >
        </Checkbox>
    )
}
