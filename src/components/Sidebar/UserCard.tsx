import { Box, Avatar, Typography, IconButton } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";
import { getAuth } from "firebase/auth";

export const UserCard = () => {
  const { currentUser } = getAuth();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <Avatar
          sx={{ width: 65, height: 65 }}
          src={currentUser?.photoURL ?? ""}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            color="primary.main"
            fontWeight={600}
            fontSize={22}
            lineHeight={1}
          >
            {currentUser?.displayName}
          </Typography>
          <Typography color="secondary.dark" fontSize={16} lineHeight={1}>
            Senior Developer
          </Typography>
        </Box>
      </Box>
      <IconButton sx={{ height: "max-content" }}>
        <EditOutlined />
      </IconButton>
    </Box>
  );
};
