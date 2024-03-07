import React from 'react'
import { Alert, Snackbar, Collapse, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export const CustomAlert = ({ isOpen, message, setMessage }) => (
    <Snackbar open={isOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={6000}
        onClose={() => setMessage('')}>
        <Collapse in={isOpen}>
            <Alert
                color='error'
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setMessage('')
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
