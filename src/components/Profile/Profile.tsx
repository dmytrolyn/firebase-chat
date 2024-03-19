import { Box } from "@mui/material";

export const Profile = () => {
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
    ></Box>
  );
};
