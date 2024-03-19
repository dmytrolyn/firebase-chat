import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Box, Button } from "@mui/material";
const Auth = () => {
  const auth = getAuth();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <Box
      width={200}
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        Sign In
      </Button>
    </Box>
  );
};
export default Auth;
