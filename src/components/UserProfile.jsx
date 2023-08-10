import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

let sideMenu = ["Profile", "Posts", "Galary", "Todo"];

function UserProfile() {
  const { userId } = useParams();
  return (
    <>
      <Grid container mt={2} ml={1}>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xl={4}
          sx={{
            height: 550,
            width: "20%",
            borderRadius: "20px",
            backgroundColor: "blue",
          }}
        >
          {sideMenu.map((menu) => (
            <Typography
              key={menu}
              variant="subtitle1"
              mb={2}
              sx={{
                color: "white",
                fontWeight: 570,
                borderBottom: "2px solid white",
                width: "80%",
                borderBottomWidth: "80%",
                borderBottomColor: "gray",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/${userId}/${menu.toLowerCase()}`}
              >
                {menu}
              </Link>
            </Typography>
          ))}
        </Grid>
        <Grid
          item
          xl={8}
          sx={{
            border: "1px solid  white",
            height: 550,
            width: "80%",
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}

export default UserProfile;
