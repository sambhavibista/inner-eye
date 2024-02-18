import React from "react";

import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";

function RegistrationFormPopup() {
  return (
    <div>
      {/* Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
            Registration Form
          </Typography>
        </Box>
        <Box>
          <Typography
            className="responsive__fontsize14"
            sx={{
              lineHeight: "16px",
              color: "secondary.secondary_600",
              textTransform: "uppercase",
            }}
          >
            Form Number
          </Typography>
          <Typography
            className="responsive__fontsize14"
            sx={{
              lineHeight: "16px",
              color: "secondary.secondary_600",
              textTransform: "uppercase",
            }}
          >
            211
          </Typography>
        </Box>
      </Box>
      {/* Actual Form */}
      <Box sx={{ mt: "1rem" }}>
        <form>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              >
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Gender"

                  // onChange={handleChange}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="Age"
                variant="outlined"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="text"
                id="outlined-basic"
                label="Address"
                variant="outlined"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
                size="small"
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Occupation"
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Medical History"
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              >
                <InputLabel id="demo-simple-select-label">
                  Package Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Package Type"
                  // onChange={handleChange}
                >
                  <MenuItem value="basic">Basic</MenuItem>
                  <MenuItem value="standard">Standard</MenuItem>
                  <MenuItem value="premium">Premium</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Any other affilations"
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="Single"
                  />
                  <FormControlLabel
                    value="group"
                    control={<Radio />}
                    label="Group"
                  />
                </RadioGroup>
              </FormControl>{" "}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="Enter Member Number"
                variant="outlined"
                size="small"
                sx={{ maxWidth: { xs: "100%", md: "14rem" } }}
              />{" "}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I hereby agree to the present and future terms & conditions of inner eye pvt.ltd"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "secondary.main", color: "white" }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default RegistrationFormPopup;