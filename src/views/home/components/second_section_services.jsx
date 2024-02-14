import React from "react";
import { Box, Typography, Button } from "@mui/material";
// import OrangeDivider from '../../../components/ui/divider'; //relative import

import OrangeDivider from "src/components/ui/orange_divider";
import ServiceCard from "./service_card";

function SecondSectionServices() {
  return (
    <Box sx={{}}>
      {/* first box */}

      <Box
        sx={{
          // backgroundColor: "green",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <OrangeDivider>
          <Typography
            sx={{
              fontSize: "13px",
              letterSpacing: "4px",
              color: "secondary.secondary_600",
              fontFamily: "arial",
            }}
          >
            Best Services
          </Typography>
        </OrangeDivider>

        <Typography
          variant="h3"
          className="responsive_fontSize32"
          sx={{
            color: "secondary.secondary_400",
            fontWeight: "bold",
            letterSpacing: "0.35px",
            lineHeight: "42px",
            fontFamily: "Times New Roman",
          }}
        >
          Services
        </Typography>
      </Box>

      {/* second box */}
      <Box sx={{display:"flex",flexDirection:"row",gap:"17px"}}>
        <ServiceCard />
        
        
      </Box>

      {/* third box */}
      <Box sx={{display:"flex",justifyContent:"center",gap:"30px", marginTop:"20px"}}>
        <Button
          variant="outlined"
          sx={{
            color: "Black",
            textTransform: "capitalize",
            fontWeight: "300",
            lineHeight: "21px",
            borderColor: "secondary.main",
            borderRadius:"0"
          
          }} 
          className="responsive_fontSize18"
        >
          Registration
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "Black",
            textTransform: "capitalize",
            fontWeight: "300",
            lineHeight: "21px",
            borderColor: "secondary.main",
              borderRadius:"0"
          }}
          className="responsive_fontSize18"
        >
          Free Ebook
        </Button>
      </Box>
    </Box>
  );
}

export default SecondSectionServices;
