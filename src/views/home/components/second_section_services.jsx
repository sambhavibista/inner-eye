import React, { useState, useEffect } from "react";

import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  Slide,
  CircularProgress,
} from "@mui/material";
// import OrangeDivider from '../../../components/ui/divider'; //relative import

import OrangeDivider from "src/components/ui/orange_divider";
import ServiceCard from "./service_card";
import ServiceList from "./service_list";
import RegistrationForm from "./registration_form_popup";
import FreeEbookForm from "./freeEbook_form_popup";

import { useSelector, useDispatch } from "react-redux";
import { fetchServiceList } from "src/redux/api/home_slice_api";
import Loader from "src/components/loader/loader";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const handleClose = () => {
  setOpen(false);
};
function SecondSectionServices() {
  const dispatch = useDispatch();

  const isServiceListLoading = useSelector(
    (state) => state.home?.isServiceListLoading
  );

  const serviceList = useSelector((state) => state.home?.serviceList);

  const [openRegistrationDialog, setOpenRegistrationDialog] = useState(false);
  const [openFreeEbookDialog, setOpenFreeEbookDialog] = useState(false);

  useEffect(() => {
    dispatch(fetchServiceList());
  }, [dispatch]);

  console.log("service list state", isServiceListLoading, serviceList);

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
              letterSpacing: "4px",
              color: "secondary.secondary_600",
              fontFamily: "arial",
            }}
          >
            Best Services
          </Typography>
        </OrangeDivider>

        <Typography
          variant="h3"
          className="responsive_fontSize32"
          sx={{
            color: "secondary.secondary_400",
            fontWeight: "bold",
            letterSpacing: "0.35px",
            lineHeight: "42px",
            fontFamily: "Times New Roman",
            mb: "11px",
          }}
        >
          Services
        </Typography>
      </Box>

      {/* second box */}
      <Box sx={{ mt: "47px", mb: "47px" }}>
        {isServiceListLoading ? (
          <Loader />
        ) : (
          <ServiceList serviceList={serviceList} />
        )}
      </Box>

      {/* third box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          mb: "50px",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => setOpenRegistrationDialog(true)}
          sx={{
            color: "Black",
            textTransform: "capitalize",
            fontWeight: "300",
            lineHeight: "21px",
            borderColor: "secondary.main",
            borderRadius: "0",
          }}
          className="responsive_fontSize18"
        >
          Registration
        </Button>
        <Button
          variant="outlined"
          onClick={() => setOpenFreeEbookDialog(true)}
          sx={{
            color: "Black",
            textTransform: "capitalize",
            fontWeight: "300",
            lineHeight: "21px",
            borderColor: "secondary.main",
            borderRadius: "0",
          }}
          className="responsive_fontSize18"
        >
          Free Ebook
        </Button>
      </Box>

      {/* registration dialog */}
      <Dialog
        open={openRegistrationDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenRegistrationDialog(false)}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <RegistrationForm />
        </DialogContent>
      </Dialog>

      {/* Free Ebook dialog */}
      <Dialog
        open={openFreeEbookDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenFreeEbookDialog(false)}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="sm"
      >
        <DialogContent>
          <FreeEbookForm />
        </DialogContent>
      </Dialog>
      {/* <h1>My value: {value}</h1>
      <h1>My age: {age}</h1> */}
    </Box>
  );
}

export default SecondSectionServices;
