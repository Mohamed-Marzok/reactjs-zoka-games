import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import { Box, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { getGamesByCategory } from "../../../../redux/gamesSlice";

const options = [
  "All Category",
  "Action",
  "Card",
  "MOBA",
  "Shooter",
  "Sports",
  "Strategy",
];

export default function Categories() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    dispatch(getGamesByCategory(options[index]));
    console.log(options[index]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          bgcolor: "background.paper",
          width: { md: "250px", sx: "100px" },
        }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <WindowIcon />
              <Box sx={{ marginTop: "3px !important" }}>
                {options[selectedIndex]}
              </Box>
            </Stack>
          </ListItemText>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            sx={{ width: { md: "250px", sx: "100px" } }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
