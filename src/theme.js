import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f3ecf1", // YELLOW COLOR
    },
    secondary: {
      main: "#543d72",
      secondary_300: "#eeeeee",
      secondary_400: "#480765",
      secondary_600: "#6a1067",
      secondary_700:"#510C4F" ,// BLACK COLOR
    },
    tertiary: {
      main: "#f58220", // GREEN COLOR
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Roboto serif",
  },
});

export default theme;