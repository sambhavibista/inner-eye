import React from 'react'
import { Box , Typography } from '@mui/material'
import OrangeDivider from "src/components/ui/orange_divider";
import EventList from './event_list';
function SixthSectionEvents() {
  return (
    <Box sx={{ gap: "140px" }}>
    {/* first box */}

    <Box
      sx={{
        // backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "49px",
      }}
    >
      <OrangeDivider>
        <Typography
          sx={{
            fontSize: "13px",
            letterSpacing: "3px",
            color: "secondary.secondary_600",
              fontFamily: "arial",
            lineHeight: "18px",
            fontWeight:"400"
          }}
        >
          FEEL TOGETHER
        </Typography>
      </OrangeDivider>
      <Typography
        variant="h3"
        className="responsive_fontSize32"
        sx={{
          color: "secondary.secondary_400",
          fontWeight: "700",
          letterSpacing: "0.25px",
          lineHeight: "36px",
          fontSize:"32px",
          fontFamily: "Times New Roman",
          mt:"21px",
          mb:"21px"
        }}
      >
        Events
      </Typography>
    </Box>
    <Box sx={{mb:"39px"}}>
        <EventList />
    </Box>
    </Box>
  )
}

export default SixthSectionEvents