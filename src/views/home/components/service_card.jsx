import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";
import { Typography } from "@mui/material/";

function ServiceCard() {
  return (
    <Card
      sx={{
        maxWidth: 275,
        backgroundColor: "secondary.main",
        height: "280px",
        padding: "30px 24px",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontWeight: "600", color: "white" }}
          className="responsive_fontSize18"
        >
          Sound healing
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "white", fontWeight: "300" }}
          className="responsive_fontSize14"
        >
          Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet
          dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
