import React from "react";
import Box from "@mui/material/Box";
import yoga from "../../../assets/images/yoga.png";
import { Button, Divider, Typography } from "@mui/material";

function FirstSectionLanding() {
  const renderYoga = (
    <img
      src={yoga}
      alt="inner-eye-yoga"
      style={{ width: "550px", maxHeight: "550px" }}
    />
  );

  return (
    <>
      {/* DESKTOP VIEW START */}
      <Box
        sx={{
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#F3ECF1",
          display: { xs: "none", md: "flex" },
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            maxWidth: "40rem",
            width: "100",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              color: "secondary.secondary_400",
            }}
          >
            INNER EYE
          </Typography>

          <Typography sx={{ justifyContent: "center", display: "flex", textAlign:"justify"}}>
            Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just
            a retreat; it's a sanctuary for the mind, body, and spirit. Our
            personalized packages cater to your unique needs, offering a blend
            of yoga, meditation, sound healing, breath work, naval treatment,
            psychosocial counseling, spiritual counseling, and past life
            regression. At Inner Eye, our commitment goes beyond providing a
            retreat experience. We empower you to integrate wellness into your
            everyday life. Join us on this transformative journey, and let the
            Inner Eye guide you to a life of balance, clarity, and inner
            harmony.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.secondary_600",
              opacity: "0.8",
              color: "white",
              "&:hover": { backgroundColor: "secondary.main", opacity: "1" },
            }}
          >
            About Us
          </Button>
        </Box>
        {/* RIGHT SIDE */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {renderYoga}
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "700",
              fontStyle: "Italic",
              color: "secondary.secondary_700",
            }}
          >
            “Nestled in the lap of the Himalayas in Nepal”
          </Typography>
        </Box>
      </Box>
      {/* DESKTOP VIEW END */}

      {/* MOBILE VIEW START */}
      {/* LEFT SIDE */}
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F3ECF1",
          display: { xs: "flex", md: "none" },
        }}
      >
        <Box
          sx={{
            maxWidth: "40rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              color: "secondary.secondary_400",
            }}
          >
            INNER EYE
          </Typography>
          
          <Typography
            sx={{ justifyContent: "center", display: "flex", fontSize: "13px" , textAlign:"justify"}}
          >
            Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just
            a retreat; it's a sanctuary for the mind, body, and spirit. Our
            personalized packages cater to your unique needs, offering a blend
            of yoga, meditation, sound healing, breath work, naval treatment,
            psychosocial counseling, spiritual counseling, and past life
            regression.At Inner Eye, our commitment goes beyond providing a
            retreat experience. We empower you to integrate wellness into your
            everyday life. Join us on this transformative journey, and let the
            Inner Eye guide you to a life of balance, clarity, and inner
            harmony.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "secondary.secondary_600",
              opacity: "0.8",
              color: "white",
              fontSize:"15px",
              "&:hover": { backgroundColor: "secondary.main", opacity: "1" },
            }}
          >
            About Us
          </Button>
        </Box>
        {/* RIGHT SIDE */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {renderYoga}
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "700",
              fontStyle: "Italic",
              color: "secondary.secondary_700",
            }}
          >
            “Nestled in the lap of the Himalayas in Nepal”
          </Typography>
        </Box>
      </Box>
      {/* MOBILE VIEW END */}
    </>
  );
}

export default FirstSectionLanding;
