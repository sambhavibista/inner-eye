import React from "react";
import FirstSectionLanding from "./components/first_section_landing";
import SecondSectionServices from "./components/second_section_services";
import Box from "@mui/material/Box";
import ThirdSectionPodcast from "./components/third_section_podcast";
import FourthSectionGallery from "./components/fourth_section_gallery";
import FifthSectionBlog from "./components/fifth_section_blog";

function HomeView() {
  return (
    <main>
      <Box component="section" backgroundColor="primary.main">
        <div className="apply_maxwidth">
          <FirstSectionLanding />
        </div>
      </Box>
      <Box component="section" backgroundColor="white">
        <div className="apply_maxwidth">
          <SecondSectionServices />
        </div>
      </Box>
      <Box component="section" backgroundColor="primary.main">
        <div className="apply_maxwidth">
          <ThirdSectionPodcast />
        </div>
      </Box>
      <Box component="section" backgroundColor="white">
        <div className="apply_maxwidth">
          <FourthSectionGallery />
        </div>
      </Box>
      <Box component="section" backgroundColor="primary.main">
        <div className="apply_maxwidth">
          <FifthSectionBlog />
        </div>
      </Box>
    </main>
  );
}

export default HomeView;
