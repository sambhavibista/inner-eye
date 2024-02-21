import React from "react";
import { Box, Button, Typography } from "@mui/material";
import OrangeDivider from "src/components/ui/orange_divider";

import yoga from "../../../assets/images/yoga.png";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  
  
  
} from "src/redux/api/home_slice_api"; //absolute path
function FirstSectionLanding() {
  //getting state value from home slice

  const dispatch = useDispatch();
  const value = useSelector((state) => state.home?.value);
  const age = useSelector((state) => state.home?.age);

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleIncrementByAmount() {
    dispatch(incrementByAmount(20));
  }
  function handleDecrementByAmount() {
    dispatch(decrementByAmount(20));
  }

  function handleIncrementAge() {
    dispatch(incrementAge());
  }
  function handleDecrementAge(){
    dispatch(decrementAge());
  }
  function handleIncrementAgeByAmount(){
    dispatch(incrementAgeByAmount(20));
  }
  function handleDecrementAgeByAmount(){
    dispatch(decrementAgeByAmount(20));
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      {/* // <h1>My value: {value}</h1>
      // <h1>My age: {age}</h1> */}
      {/* LEFT SIDE */}
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
        <Box
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            color: "secondary.secondary_400",
          }}
        >
          <OrangeDivider>INNER EYE</OrangeDivider>
        </Box>
        <p className="responsive_fontsize20">
          Nestled in the lap of the Himalayas in Nepal, Inner Eye is not just a
          retreat; it's a sanctuary for the mind, body, and spirit. Our
          personalized packages cater to your unique needs, offering a blend of
          yoga, meditation, sound healing, breath work, naval treatment,
          psychosocial counseling, spiritual counseling, and past life
          regression. At Inner Eye, our commitment goes beyond providing a
          retreat experience. We empower you to integrate wellness into your
          everyday life. Join us on this transformative journey, and let the
          Inner Eye guide you to a life of balance, clarity, and inner harmony.
        </p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.secondary_600",
            opacity: "0.8",
            color: "white",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: "1",
            },
          }}
        >
          About Us
          </Button>
        {/*
        <Button sx={{ color: "black" }} onClick={handleIncrement}>
          {" "}
          Increment me
        </Button>
        <Button sx={{ color: "black" }} onClick={handleDecrement}>
          Decrement me
        </Button>
        <Button sx={{ color: "black" }} onClick={handleIncrementByAmount}>
          Increment by amount
        </Button>
        <Button sx={{ color: "black" }} onClick={handleDecrementByAmount}>
          Decrement by amount
        </Button>
        <Button sx={{ color: "black" }} onClick={handleIncrementAge}>
          Increment age
        </Button>
        <Button sx={{ color: "black" }} onClick={handleDecrementAge}>
          Decrement age
        </Button>
        <Button sx={{ color: "black" }} onClick={handleIncrementAgeByAmount}>
          Increment age By amount
        </Button>
        <Button sx={{ color: "black" }} onClick={handleDecrementAgeByAmount}>
          Decrement age By amount
        </Button> */}
      </Box>
      {/* RIGHT SIDE */}
      <Box>
        <img src={yoga} alt="Yoga" style={{ maxHeight: "550px" }} />
        <Typography
          sx={{
            fontSize: "17px",
            fontWeight: "700",
            fontStyle: "Italic",
            color: "secondary.secondary_700",
            mb: "40px",
          }}
        >
          “Nestled in the lap of the Himalayas in Nepal”
        </Typography>
      </Box>
    </Box>
  );
}

export default FirstSectionLanding;
