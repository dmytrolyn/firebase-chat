import { Box, IconButton } from "@mui/material";
import {
  SearchOutlined,
  FavoriteBorderOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";

export const ChatHeaderTools = () => {
  return (
    <Box>
      <IconButton>
        <SearchOutlined fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteBorderOutlined fontSize="large" />
      </IconButton>
      <IconButton>
        <NotificationsOutlined fontSize="large" />
      </IconButton>
    </Box>
  );
};
