import { List, ListItem, Box } from "@mui/material";
import { ListItemCard } from "./ListItemCard";
import { SearchBar } from "../Misc/SearchBar";

export const ChatList = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      gap={2}
    >
      <SearchBar />
      <List sx={{ width: 1, p: 0 }}>
        {[0, 1, 2].map((_) => (
          <ListItem
            sx={{
              width: 1,
              my: 3,
              p: 0,
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            <ListItemCard />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
