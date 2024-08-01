import * as React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { Box, Stack } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import { useDispatch } from "react-redux";
import { getGamesByPlatform } from "../../../../redux/gamesSlice";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  border: "2px solid #777",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  width: "100%",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const options = ["Platform", "pc", "browser"];

export default function SearchContainer() {
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
    console.log(options[index]);
    dispatch(getGamesByPlatform(options[index]));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0.7,
        overflow: "hidden",
        borderRadius: "50px",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <Box>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              transform: "translateY(-8%)",
              width: { md: "200px", sx: "100px" },
              height: "100%",
              p: 0,
              m: 0,
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
                  <TvIcon />
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
                sx={{ width: { md: "200px", sx: "100px" } }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Search>
    </Box>
  );
}
