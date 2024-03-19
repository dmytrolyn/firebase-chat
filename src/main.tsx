import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/firebase.ts";
import { theme } from "./ui/theme";

import App from "./App.tsx";
import "./global.css";

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
