import React, { useState } from "react";
import { Box, Typography ,Grid, TextField, Button} from "@mui/material";

function FreeEbookForm() {
  const[name, setName]=useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(
      "data",
      name,
      mobileNumber,
      email
    );
  };
  return (
    <div style={{margin: 0 , padding: 0}} >
      {/* heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          
        }}
      >
        <Box>
          <Typography
            className="responsive__fontsize18"
            sx={{
              fontWeight: "600",
              lineHeight: "21px",
              color: "secondary.secondary_600",
              textTransform: "uppercase",
            }}
          >
            Inner Eye
          </Typography>
          <Typography
            sx={{
              fontWeight: "300",
              color: "secondary.secondary_600",
              mt: "7px",
            }}
            className="responsive__fontsize14"
          >
            Request For Free Ebook
          </Typography>
        </Box>
      </Box>
      {/* actual form */}
      <Box  mt= "1rem" sx={{display:"flex" , flexDirection:"column"}}>
        <form onSubmit={handleSubmit}>
          <Grid
            // container
       
            // rowSpacing={0}
            // columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Grid item xs={12} md={6}   sx={{
                display: "flex",
                justifyContent: "center",
                mt:"30px"
              }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}   sx={{
                display: "flex",
                justifyContent: "center",
                mt:"10px"
              }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}   sx={{
                display: "flex",
                justifyContent: "center",
                mt:"10px"
              }} >
              <TextField
                fullWidth
                type="email"
                id="outlined-basic"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                size="small"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                mt:"40px"
              }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "secondary.main", color: "white" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default FreeEbookForm;
