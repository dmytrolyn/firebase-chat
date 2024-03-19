import { Box, IconButton } from "@mui/material";
import {
  AttachFileRounded,
  CameraAltOutlined,
  SentimentSatisfiedAltOutlined,
} from "@mui/icons-material";

export const IconTools = () => {
  return (
    <Box mr={1}>
      <IconButton>
        <AttachFileRounded
          fontSize="large"
          sx={{ transform: "rotate(45deg)" }}
        />
      </IconButton>
      <IconButton>
        <CameraAltOutlined fontSize="large" />
      </IconButton>
      <IconButton>
        <SentimentSatisfiedAltOutlined fontSize="large" />
      </IconButton>
    </Box>
  );
};
