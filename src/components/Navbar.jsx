import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography sx={{ color: "red", fontFamily: "Verdana", marginLeft: "1rem", fontWeight: "600", display: { xs: 'none', sm: 'block' } }}>
      WisdomYT
      </Typography>
      {/* <h3 style={{}} >HB Tube</h3> */}
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
