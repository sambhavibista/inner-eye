import React from 'react'
import { Box, Typography } from "@mui/material";
import OrangeDivider from "src/components/ui/orange_divider";


function FifthSectionBlog() {
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
        marginTop: "68px",
      }}
    >
      <OrangeDivider>
        <Typography
          sx={{
            fontSize: "13px",
            letterSpacing: "3px",
            color: "secondary.secondary_600",
            //   fontFamily: "arial",
            lineHeight: "18px",
            fontWeight:"400"
          }}
        >
          HELPING YOU FIND CLARITY FROM WITHIN
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
          mb: "96px",
        }}
      >
        Blogs
      </Typography>
    </Box>
    {/* second box */}
    <Box sx={{display:"flex", justifyContent:"space-between" }}>
      <Typography sx={{backgroundColor:"white", height:"200px", width:"545px", mr:"183px"}}>
        <p className='responsive_fontSize' style={{fontFamily:"Times New Romen" , fontStyle:"italic", fontWeight:"400",lineHeight:"18px",marginTop:"54px", marginLeft:"60px" ,}}>Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facilisis</p>
        <p className='responsive_fontSize' style={{fontFamily:"Times New Romen" , fontStyle:"italic", fontWeight:"400",lineHeight:"18px", marginLeft:"60px" ,}}>Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facili</p>
        <p className='responsive_fontSize' style={{fontFamily:"Times New Romen" , fontStyle:"italic", fontWeight:"400",lineHeight:"18px", marginLeft:"60px" ,}}>Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facilisis</p>
        <p className='responsive_fontSize' style={{fontFamily:"Times New Romen" , fontStyle:"italic", fontWeight:"400",lineHeight:"18px", marginLeft:"60px" , marginBottom:"54px"}}>Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facili</p>
      </Typography>
      <Typography sx={{backgroundColor:"white", height:"200px", width:"545px" , mb:"270px"}}>
        <p className='responsive_fontSize' style={{fontFamily:"Times New Romen" , fontStyle:"italic", fontWeight:"400",lineHeight:"18px",marginTop:"54px", marginLeft:"60px" ,}}>Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facilisis</p>
        <p className='responsive_fontSize' style={{fontFamily:"Times New Romen" , fontStyle:"italic", fontWeight:"400",lineHeight:"18px", marginLeft:"60px" ,}}>Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facili</p>
        <p className='responsive_fontSize' style={{fontFamily:"Times New Romen" , fontStyle:"italic", fontWeight:"400",lineHeight:"18px", marginLeft:"60px" ,}}>Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facilisis</p>
        <p className='responsive_fontSize' style={{fontFamily:"Times New Romen" , fontStyle:"italic", fontWeight:"400",lineHeight:"18px", marginLeft:"60px" , marginBottom:"54px"}}>Lorem ipsum dolor sit amet consectetur. Et ac pulvinar facili</p>
      </Typography> 
        
      
      
    </Box>
    </Box>
  )
}

export default FifthSectionBlog;