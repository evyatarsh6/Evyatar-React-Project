import { Alert } from '@mui/material';

export const CustomAlert = ({ message }) => {
    return (
        <Alert severity="success" color="warning">
            {message}
      </Alert> 
    )
}
