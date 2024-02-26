import React from "react";

import { Box, IconButton, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import AcheievementCard from "./acheievement_card";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  YouTube,
} from "@mui/icons-material";

function NinthSectionContact() {
  return (
    <div>
      {/* Main Container */}
      <Box sx={{ display: "flex", gap: "2rem" }}>
        {/* Left Container */}
        <Box
          sx={{
            maxWidth: "60%",
            width: "100%",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              className="responsive__fontsize20"
              sx={{
                color: "secondary.secondary_400",
                fontWeight: "600",
                letterSpacing: "5px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Inner Eye
            </Typography>
            <Typography
              className="responsive__fontsize14"
              sx={{ textAlign: "center", mt: "20px" }}
            >
              Nestled in the lap of the Himalayas in Nepal, Inner Eye is not
              just a retreat; it's a sanctuary for the mind, body, and spirit.
              Our personalized packages cater to your unique needs, offering a
              blend of yoga, meditation, sound healing, breathwork, naval
              treatment, psychosocial counseling, spiritual counseling, and past
              life regression. At Inner Eye, our commitment goes beyond
              providing a retreat experience. We empower you to integrate
              wellness into your everyday life. Join us on this transformative
              journey, and let the Inner Eye guide you to a life of balance,
              clarity, and inner harmony.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "2rem",
              mt: "3.75rem",
            }}
          >
            <Typography
              className="responsive__fontsize24"
              sx={{
                color: "secondary.secondary_400",
                fontWeight: "600",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Acheievements
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1.4rem",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <AcheievementCard />
              <AcheievementCard />
              <AcheievementCard />
            </Box>
          </Box>
        </Box>
        {/* Right Container */}
        <Box sx={{ maxWidth: "40%", width: "100%" }}>
          <Typography
            variant="h3"
            className="responsive__fontsize32"
            sx={{ fontWeight: "bold" }}
          >
            Inner Eye Office
          </Typography>
          <Typography className="responsive__fontsize16">
            Lainchaur 26 , Kathmandu, Nepal
          </Typography>
          <Typography className="responsive__fontsize16">
            +977-01-456788, +977-9848486743
          </Typography>
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <WhatsAppIcon sx={{ color: "#25D366" }} />
            <Typography className="responsive__fontsize16">
              +977-9848486743
            </Typography>
          </span>

          <Box>
            <Typography
              className="responsive__fontsize18"
              sx={{ fontWeight: "600" }}
            >
              Follow Us On
            </Typography>
            <IconButton
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 4px 4px 0px rgba(106, 16, 103, 0.4)",
              }}
            >
              <Facebook sx={{ color: "#316FF6" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 4px 4px 0px rgba(106, 16, 103, 0.4)",
              }}
            >
              <Pinterest sx={{ color: "#E60023" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 4px 4px 0px rgba(106, 16, 103, 0.4)",
              }}
            >
              <LinkedIn sx={{ color: "#0A66C2" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 4px 4px 0px rgba(106, 16, 103, 0.4)",
              }}
            >
              <Instagram sx={{ color: "#feda75" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "white",
                boxShadow: "0px 4px 4px 0px rgba(106, 16, 103, 0.4)",
              }}
            >
              <YouTube sx={{ color: "#CD201F" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default NinthSectionContact;