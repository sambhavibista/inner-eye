import { useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
//ICONS IMPORT
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
//ASSESTS IMPORT
import logo from "../../assets/logo/innery-eye logo.png";

const navItems = [
  "Home",
  "About",
  "Services",
  "Podcast",
  "Gallery",
  "Blogs",
  "Events",
  "Contact Us",
];

function NavBar() {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  function toggleMobileDrawer() {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  }

  const renderLogo = (
    <img
      src={logo}
      alt="Inner Eye"
      style={{ width: "100%", height: "100%" }}
    ></img>
  );

  const renderItems = (
    <>
      {/* <Typography sx={{textAlign:"center"}}> */}
      {navItems?.map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}
      {/* </Typography> */}
    </>
  );

  return (
    <AppBar position="static" sx={{backgroundColor:"white"}}>
      <Toolbar disableGutters className="apply_maxwidth" sx={{width:"100%" , py:"0"}}>
        {/* MOBILE VIEW */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>{renderLogo}</Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMobileDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        {/* END MOBILE VIEW */}

        {/* START DESKTOP VIEW */}
        <Box
          sx={{
            // border: "2px solid red",
            justifyContent: "space-between",
            backgroundColor: "white",
            width: "100%",
            alignItems: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box>{renderLogo}</Box>
          <Box
            sx={{
              // border: "1px solid red",
              display: "flex",
              gap: "30px",
            }}
          >
            {renderItems}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              flexItem
              sx={{ borderLeftWidth: 0.5, backgroundColor: "black" }}
            />
            <Box sx={{ mx: "0.2rem", alignItems: "center" }}>
              <FacebookIcon />
              <PinterestIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </Box>
            <Divider
              orientation="vertical"
              variant="fullwidth"
              flexItem
              sx={{ borderLeftWidth: 0.5, backgroundColor: "black" }}
            />
          </Box>
        </Box>

        {/* END DESKTOP VIEW */}
      </Toolbar>
      <Drawer
        anchor="top"
        open={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      >
        {renderItems}
      </Drawer>
    </AppBar>
  );
}
export default NavBar;
