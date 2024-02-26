import {React,useEffect} from "react";
import { Box, Typography } from "@mui/material";
import OrangeDivider from "src/components/ui/orange_divider";
import GalleryList from "./gallery_list";
import Loader from "src/components/loader/loader";

import { useSelector, useDispatch } from "react-redux";
import { fetchGalleryList } from "src/redux/api/home_slice_api";

function FourthSectionGallery() {

  const galleryList = useSelector((state) => state.home?.galleryList)
  const isGalleryListLoading = useSelector(
    (state) => state.home?.isGalleryListLoading
  );
  
  console.log("gallery list state", isGalleryListLoading, galleryList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGalleryList());
  }, [dispatch]);


 
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
            WE CAPTURE SOME GLIMPSE OF YOU
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
          Gallery
        </Typography>
      </Box>
      {/* second Box */}
      <Box sx={{mt:"47px",mb:"47px"}}>

      {isGalleryListLoading ? (
          <Loader />
        ) : (
          <GalleryList galleryList={galleryList} />
        )}
      </Box>
    </Box>
  );
}

export default FourthSectionGallery;
