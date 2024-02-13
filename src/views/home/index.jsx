import React from "react";
import FirstSectionLanding from "./components/first_section_landing";
import SecondSectionServices from "./components/second_section_services";

function HomeView() {
  return (
    <div>
      <FirstSectionLanding />
      <SecondSectionServices />
    </div>
  );
}

export default HomeView;
