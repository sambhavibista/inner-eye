import { Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";
import ReactPlayer from 'react-player/lazy'
import podcast from "../../../assets/images/podcast.png";
import youtube_logo from "../../../assets/logo/youtube_logo.png";

function PodcastCard() {
  return (
    <Card
      sx={{
        maxWidth: 287,
        backgroundColor: "white",
        height: "337px",
        position: "relative",
        mb:"95px"
        // padding: "30px 24px",
      }}
    >
      <CardContent sx={{padding:"0"}}>
        <a
          href="https://www.youtube.com/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src={podcast}
              alt="podcast"
              style={{ Height: "280px", maxWidth: "287" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <img
                src={youtube_logo}
                alt="youtube logo"
                style={{ width: "50px", height: "auto" }}
              />
            </div>
          </div>

          <Typography
            sx={{ fontWeight: "700", color: "black", lineHeight: "18px" ,mt:"24px",ml:"11px", mb:"12px" }}
            className="responsive_fontSize"
          >
            {" "}
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography sx={{fontWeight:"400", color:"black",lineHeight:"17px",letterSpacing:"0.25px", mt:"12px"}}
          className="responsive_fontSize14">
            Lorem ipsum dolor sit amet dolor sit bdsa Lorem ipsum dolor sit amet
            dolor sit bdsa Lorem ipsum dolor sit amet dolor sit bdsa
          </Typography>
        </a>
      </CardContent>
    </Card>
  );
}

export default PodcastCard;
