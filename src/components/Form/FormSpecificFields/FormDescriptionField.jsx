import React from 'react'
import { FormTextInputField } from '../FormGenericFields/FormTextInputField'

export const FormDescriptionField = ({ control }) => (
    <FormTextInputField
        control={control}
        name={'descriptionField'}
        rulesObj={{
            pattern: {
                value: /avi/i,
                message: 'Description must contain AVI'
            }
        }}
    />
)
