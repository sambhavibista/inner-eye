import React from "react";
import { Card, CardContent, CardActions } from "@mui/material";
import { Typography } from "@mui/material/";

function ServiceCard({item}) {
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
          {item?.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "white", fontWeight: "300" }}
          className="responsive_fontSize14"
        >
          {item?.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
