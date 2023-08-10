import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChatUser from "./ChatUser";
import OnlineUser from "./onlineUser";
import DialogMenu from "./DialogMenu";

function UserPosts() {
  const data = useSelector((state) => state.users.value);
  const [open, setOpen] = useState(false);
  const { userId } = useParams();
  const users = data?.users;
  const loggedUser = users.find((user) => user.id == parseInt(userId));
  return (
    <Grid container m={1} direction="column" height="100%">
      <Grid item pb={2} height="10%">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1">Posts</Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            mr={2}
            onClick={() => setOpen(!open)}
          >
            <img
              src={loggedUser?.profilepicture}
              alt="profieInfo"
              style={{ borderRadius: "50%", width: "50px", objectFit: "cover" }}
            />
            <Typography>{loggedUser?.name}</Typography>
            <DialogMenu open={open} setOpen={setOpen} data={loggedUser} />
          </Stack>
        </Stack>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        height="90%"
      >
        <Typography
          variant="h3"
          style={{
            fontSize: 64,
            fontWeight: 800,
            background: "-webkit-linear-gradient(lightgrey, white)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Comming Soon
        </Typography>
        <Box
          style={{
            position: "absolute",
            bottom: "10px",
            right: 325,
            marginRight: "10px",
          }}
        >
          {<OnlineUser />}
        </Box>
        <Box style={{ position: "absolute", bottom: "10px", right: 100 }}>
          <ChatUser />
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserPosts;
