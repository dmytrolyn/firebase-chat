import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Container } from "@mui/material";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";

function App() {
  const [user] = useAuthState(getAuth());

  return (
    <Container disableGutters maxWidth="xxl" sx={{ height: "100%" }}>
      {user ? <Chat /> : <Auth />}
    </Container>
  );
}

export default App;
