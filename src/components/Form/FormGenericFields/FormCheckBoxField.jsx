import React, { useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { FormControlLabel, Checkbox } from '@mui/material'

export const FormCheckBoxField = ({ name, control, options }) => {
    const { setValue } = useFormContext()

    const { field } = useController({
        name,
        control
    })

    const updateFieldValue = (wantedField, updateValue) => setValue(`${wantedField}`, updateValue)

    const updateCheckBoxValue = () => updateFieldValue(`${name}`, !field.value)

    return (
        <>
            {/* {options.map((option, index) => ( */}

            <FormControlLabel
                key={`${field.name}`}
                sx={{
                    marginTop: 3
                }}
                control={
                    <Checkbox
                        onChange={updateCheckBoxValue}
                        checked={field.value}
                        id="isChoosen-field"
                    />
                }
                label={`${field.name} field`}
            />
            {/* ))} */}
        </>
    )
}
