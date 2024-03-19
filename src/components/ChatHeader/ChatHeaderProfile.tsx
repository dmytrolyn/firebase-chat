import { getAuth } from "firebase/auth";
import { Box, Typography, Avatar } from "@mui/material";

export const ChatHeaderProfile = () => {
  const { currentUser } = getAuth();
  return (
    <Box
      width={1}
      height={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar
        sx={{ width: 65, height: 65, fontSize: 36 }}
        src={currentUser?.photoURL ? currentUser.photoURL : undefined}
        alt={currentUser?.displayName || "User"}
      />
      <Typography fontSize={24} color="secondary.dark" mx={2}>
        {currentUser?.displayName}
      </Typography>
    </Box>
  );
};
