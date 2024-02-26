import { Box } from '@mui/material'
import React from 'react'

function ButtonComponent() {
  return (
    <Box>
        <Button variant = "outlined" className='responsive_fontsize18'
           sx = {{
           fontWeight: "300",
           color: "black",
           borderColor: "secondary.main",
           textTransform: "capitalize",
           lineHeight : "21px",
           letterSpacing: "0.25px",
           borderRadius: 0
          }}
          >
          </Button>
    </Box>
  )
}

export default ButtonComponent