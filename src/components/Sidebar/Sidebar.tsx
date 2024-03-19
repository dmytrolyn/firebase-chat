import { Box } from "@mui/material";
import { UserCard } from "./UserCard";
import { ChatList } from "./ChatList";

export const Sidebar = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: 600,
        height: 1,
        bgcolor: "secondary.light",
        display: "flex",
        flexDirection: "column",
        p: 5,
      }}
      gap={4}
    >
      <UserCard />
      <ChatList />
    </Box>
  );
};
