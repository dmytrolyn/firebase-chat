import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatTools from "../components/ChatTools";
import Profile from "../components/Profile";

const ChatRoom = () => {
  return (
    <Box width={1} height={1} display="flex">
      <Sidebar />
      <Box
        width={1}
        height={1}
        display="flex"
        flexDirection="column"
        mx={4}
        component="main"
      >
        <ChatHeader />
        <ChatBody />
        <ChatTools />
      </Box>
      <Profile />
    </Box>
  );
};
export default ChatRoom;
