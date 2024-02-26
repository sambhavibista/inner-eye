import React from 'react'
import { Box,Typography } from '@mui/material'

function AcheievementCard({title,total}) {
  return (
    <Box
    sx = {{
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        gap: "20px",
        maxWidth: "145px",
        width: "100%",
        boxShadow: "1px 4px 4px 0px #00000040",
        background: "#fff",
        height: "160px"

    }}
    >
        <Box >
        <Typography className='responsive_fontsize20'sx= {{fontWeight: "600", letterSpacing: "3px", textTransform: "capitalize"}}
        >{total}</Typography>
        <Typography className='responsive_fontsize20'sx= {{fontWeight: "600", letterSpacing: "3px", textTransform: "capitalize"}}>{title}</Typography>
        </Box>
</Box>
  )
}

export default AcheievementCard