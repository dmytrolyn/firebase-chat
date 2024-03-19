import { getAuth } from "firebase/auth";
import { Box, Paper, Typography, Avatar } from "@mui/material";

export type MessageType = {
  text: string;
  createdAt: string;
  uid: string;
  displayName: string;
  photoURL?: string;
};

interface MessageProps {
  data: MessageType;
  isSameSender: boolean;
}

export const Message = ({ data, isSameSender }: MessageProps) => {
  const auth = getAuth();
  const { text, uid, photoURL, displayName } = data;

  const myMessage = auth.currentUser!.uid === uid;

  const myLastMessage = myMessage && !isSameSender;
  const theirLastMessage = !myMessage && !isSameSender;

  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: myMessage ? "flex-end" : "flex-start",
        alignItems: "center",
        my: 2,
      }}
    >
      <Box
        display="flex"
        flexDirection={myMessage ? "row" : "row-reverse"}
        alignItems="flex-end"
      >
        <Paper
          sx={{
            display: "flex",
            py: 1,
            px: 2,
            borderRadius: 3,
            borderBottomRightRadius: myLastMessage ? 0 : 12,
            borderBottomLeftRadius: theirLastMessage ? 0 : 12,
            bgcolor: myMessage ? "primary.main" : "secondary.light",
            color: myMessage ? "secondary.main" : "secondary.dark",
          }}
          elevation={2}
          variant="outlined"
        >
          <Typography fontSize={18}>{text}</Typography>
        </Paper>
        {!isSameSender ? (
          <Avatar
            sx={{
              width: 35,
              height: 35,
              bgcolor: "secondary.main",
              fontSize: 24,
              mx: 1,
            }}
            src={photoURL}
            alt={displayName}
          />
        ) : (
          <Box sx={{ width: 50 }} />
        )}
      </Box>
    </Box>
  );
};
