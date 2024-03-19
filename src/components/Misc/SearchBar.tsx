import { Box, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

export const SearchBar = () => {
  return (
    <Box
      component="form"
      sx={{
        bgcolor: "secondary.main",
        width: 1,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        boxShadow: (theme) => `inset 0 0 4px ${theme.palette.secondary.light}`,
      }}
    >
      <SearchOutlined sx={{ ml: 1.5 }} />
      <TextField
        placeholder="Search Friends"
        inputProps={{
          sx: { px: 1, py: 1, fontSize: 18 },
        }}
      />
    </Box>
  );
};
