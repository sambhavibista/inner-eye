import React from "react";
import FirstSectionLanding from "./components/first_section_landing";
import SecondSectionServices from "./components/second_section_services";
import Box from "@mui/material/Box";

function HomeView() {
  return (
    <main>
      <Box component="section" backgroundColor="primary.main">
        <div  className="apply_maxwidth">
      <FirstSectionLanding />
      </div>
      </Box>
      <Box component="section" backgroundColor="white">
        <div className="apply_maxwidth">
      <SecondSectionServices />
      </div>
      </Box>
    </main>

  );
}

export default HomeView;
