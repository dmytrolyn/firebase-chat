import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export const theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#4b7df6",
      light: "#e8edff",
    },
    secondary: {
      dark: "#58585a",
      main: "#fff",
      light: "#f2f2f2",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          display: "none",
        },
      },
    },
  },
});
