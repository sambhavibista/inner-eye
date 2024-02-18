import React from "react";
import { Box, Typography } from "@mui/material";

import OrangeDivider from "src/components/ui/orange_divider";
import PodcastList from "./podcast_list";


function ThirdSectionPodcast() {
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
            }}
          >
            MENTAL HEALTH, SPIRITUALITY & HOLISTIC HEALING
          </Typography>
        </OrangeDivider>
        <Typography
          variant="h3"
          className="responsive_fontSize32"
          sx={{
            color: "secondary.secondary_400",
            fontWeight: "bold",
            letterSpacing: "0.25px",
            lineHeight: "43px",
            fontFamily: "Times New Roman",
            mb: "11px",
          }}
        >
          Podcast
        </Typography>
      </Box>
      {/* second Box */}
      <Box >
        <PodcastList/>

      </Box>
    </Box>
  );
}

export default ThirdSectionPodcast;
