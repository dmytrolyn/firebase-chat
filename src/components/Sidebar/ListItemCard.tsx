import { Avatar, Box, Typography } from "@mui/material";
import { getAuth } from "firebase/auth";
import { ChatStatus } from "./ChatStatus";

export const ListItemCard = () => {
  const { currentUser } = getAuth();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        maxHeight: 60,
      }}
    >
      <Box sx={{ display: "flex" }} gap={2}>
        <Avatar
          sx={{ width: 60, height: 60 }}
          src={currentUser?.photoURL ?? ""}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography color="primary.main" fontWeight={600} fontSize={18}>
            {currentUser?.displayName}
          </Typography>
          <Typography
            color="secondary.dark"
            fontSize={16}
            lineHeight={1}
            textOverflow="ellipsis"
            overflow="hidden"
            sx={{ wordBreak: "break-word" }}
          >
            Fool me once - shame on you, fool me twice - let's starm i'll
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-end",
          width: "max-content",
        }}
      >
        <Typography
          color="secondary.dark"
          fontSize={14}
          fontWeight={300}
          whiteSpace="nowrap"
        >
          10:34 AM
        </Typography>
        <ChatStatus />
      </Box>
    </Box>
  );
};
