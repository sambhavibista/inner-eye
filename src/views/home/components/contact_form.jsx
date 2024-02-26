import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

function ContactForm() {
  return (
    <form>
        {/* contact us form */}
        <Box sx = {{display: "flex", flexDirection: "column", gap: '0.5rem', boxShadow: "1px 1px 1px 1px #A5A1A54D",
        padding: "1.5rem",
        mt: "1rem"
    }}>
        <Typography
            variant="h4"
            className= "responsive_fontsize20"
            sx={{
                fontWeight: "bold"
            }}
        >Feel Free To Contact Us
        </Typography>

        <TextField 
            id= "outlined-basic"
            label = "Full Name"
            variant= "outlined"
            size='small'
        />
        <TextField 
            id= "outlined-basic"
            label = "Email"
            variant= "outlined"
            size='small'
        />
        
        <Button
            variant="contained"
            sx={{
                backgroundColor: "secondary.secondary_600",
                color: "white",
                borderRadius: "0",
                textTransform: "capitalize",
                "&:hover": {
                    backgroundColor: "secondary.main"
                },
                mt: "0.5rem"
            }}
        >
            Enquiry
        </Button>
    </Box>
    </form>
  )
}

export default ContactForm