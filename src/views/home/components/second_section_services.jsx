import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  Slide,
} from "@mui/material";
// import OrangeDivider from '../../../components/ui/divider'; //relative import

import OrangeDivider from "src/components/ui/orange_divider";
import ServiceCard from "./service_card";
import ServiceList from "./service_list";
import RegistrationForm from "./registration_form_popup";
import FreeEbookForm from "./freeEbook_form_popup";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const handleClose = () => {
  setOpen(false);
};
function SecondSectionServices() {
  const [openRegistrationDialog, setOpenRegistrationDialog] = useState(false);
  const [openFreeEbookDialog, setOpenFreeEbookDialog] = useState(false);

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
            mb:"11px"
          }}
        >
          Services
        </Typography>
      </Box>

      {/* second box */}
      <Box sx={{mt:"47px",mb:"47px"}}>
        <ServiceList />
      </Box>

      {/* third box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          mb:"50px"
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
        fullWidth
      >
        <DialogContent>
          <FreeEbookForm />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default SecondSectionServices;
