import React, { useState } from 'react'
import { useController } from 'react-hook-form'
import { Checkbox } from '@mui/material'

export const FormCheckBoxField = ({ name, control }) => {
    const { field } = useController({
        control,
        name
    })
    const [value, setValue] = useState(!field.value)

    return (
        <Checkbox
            onChange={() => {
                field.onChange(!value)
                setValue(!value)
            }}
            key={field.name}
            checked={value}
            type="checkbox"
            value={value}
        >
        </Checkbox>
    )
}
