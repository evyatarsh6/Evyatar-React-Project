import { Button } from '@mui/material'
import { useController } from 'react-hook-form'
import React from 'react'

export const FormSubmitBtn = ({ name, control, rulesObj }) => {
    const { field } = useController({
        name,
        control,
        rules: rulesObj
    })

    return (
        <Button
            control={control}
            name={field.name}
            type="submit"
            size='large'
            sx={{
                marginRight: 3,
                backgroundColor: 'rgba(25, 118, 210, 0.04)'
            }}
        >
            submit Button
        </Button>
    )
}
