import { Button } from '@mui/material'
import { useController, useFormContext } from 'react-hook-form'
import React from 'react'
import { constants } from '../../../constants/constants'

export const FormResetBtn = ({ name, control, rulesObj }) => {
    const { field } = useController({
        name,
        control,
        rules: rulesObj
    })

    const { reset } = useFormContext()

    const { resetFormFieldsValues } = constants

    const clickResetBtn = () => {
        reset(resetFormFieldsValues,
            {
                keepDirtyValues: true,
                keepDefaultValues: true
            }
        )
    }

    return (
        <Button
            control={control}
            onClick={clickResetBtn}
            name={field.name}
            size='large'
            sx={{
                marginRight: 3,
                backgroundColor: 'rgba(25, 118, 210, 0.04)'
            }}
        >
            reset Button
        </Button>
    )
}
