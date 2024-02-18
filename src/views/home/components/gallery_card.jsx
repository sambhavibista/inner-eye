import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import gallery from "../../../assets/images/gallery.png";

function GalleryCard() {
  return (
    <Card
      sx={{
        maxWidth: "287px",
        // backgroundColor: "white",
        maxHeight: "334px",
        mb: "95px", 
        padding: 0,
        margin : 0
      }}
    >
        <CardContent>
            <Typography>
                <img src={gallery} alt="gallery" style={{maxWidth:"100%", height:"100%" , objectFit:"cover" }} />
            </Typography>


        </CardContent>
    </Card>
  );
}

export default GalleryCard;
