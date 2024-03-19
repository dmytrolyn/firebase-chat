import { Box, Paper } from "@mui/material";

import { ChatHeaderProfile } from "./ChatHeaderProfile";
import { ChatHeaderTools } from "./ChatHeaderTools";

export const ChatHeader = () => {
  return (
    <Paper
      component="header"
      sx={{
        width: 1,
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        my: 4,
      }}
    >
      <Box>
        <ChatHeaderProfile />
      </Box>
      <Box>
        <ChatHeaderTools />
      </Box>
    </Paper>
  );
};
