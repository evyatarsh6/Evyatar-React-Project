import { Alert, Snackbar, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const CustomAlert = ({ message, setMessage }) => {

    if (message) {
        const open = message.length >0
        return (
            <Snackbar>
                <Collapse in={open}>
                    <Alert
                    action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setMessage('');
                        }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {message}
                    </Alert>
                </Collapse>
            </Snackbar>
        )
    }

}
