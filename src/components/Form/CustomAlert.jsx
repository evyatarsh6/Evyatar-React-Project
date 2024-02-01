import { Alert } from '@mui/material';

export const CustomAlert = ({ message }) => {
    
    if (!message) {
        return null
    }
    else{
        return (
    
            <Alert severity="error" color="error" sx={
                {
                    textAlign: 'center'
                }
            }>
                {message}
            </Alert> 
        )
    }
}
