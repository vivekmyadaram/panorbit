import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ChatUser from "./ChatUser";
import DialogMenu from "./DialogMenu";
import OnlineUser from "./onlineUser";

function UserInfo() {
  const { users } = useSelector((state) => state.users.value);
  console.log(users);
  const [open, setOpen] = useState(false);
  const { userId } = useParams();
  const loggedUser =
    users && users.find((user) => user.id === parseInt(userId));
  return (
    <Grid container m={1} direction="column">
      <Grid item pb={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1">Profile</Typography>
          <Stack
            direction="row"
            justifyContent="flex-start"
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

      <span style={{ borderBottom: "1px solid black" }}></span>

      <Grid item>
        <Stack
          direction="row"
          justifyContent="space-around"
          align="left"
          p={2}
          spacing={1}
        >
          <Box>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={loggedUser?.profilepicture}
                alt="infoImage"
                width="120px"
                style={{
                  borderRadius: "50%",
                }}
              />
              <Typography variant="h5">{loggedUser?.name}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Box align="right">
                <Typography variant="body2" gutterBottom>
                  Email :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  UserName :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Phone :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Website :
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.username}
                </Typography>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.email}
                </Typography>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.phone}
                </Typography>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.website}
                </Typography>
              </Box>
            </Stack>
            <div style={{ borderBottom: "1px solid grey" }}></div>
            <Typography variant="h6" align="center" ml={3} gutterBottom>
              CompanyName
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Box align="right">
                <Typography variant="body2" gutterBottom>
                  Name :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  catchphrase :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  bs :
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.company?.name}
                </Typography>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.company?.catchPhrase}
                </Typography>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.company?.bs}
                </Typography>
              </Box>
            </Stack>
          </Box>
          <div style={{ borderRight: "1px solid grey" }}></div>
          <Box>
            <Typography variant="h6" align="left">
              Adress
            </Typography>
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Box align="right">
                <Typography variant="body2" gutterBottom>
                  Street :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Suite :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  City :
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ZipCode :
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.address?.street}
                </Typography>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.address?.suite}
                </Typography>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.address?.city}
                </Typography>
                <Typography variant="body2" fontWeight="600" gutterBottom>
                  {loggedUser?.address?.zipcode}
                </Typography>
              </Box>
            </Stack>

            <iframe
              src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed"
              width="360"
              height="270"
            ></iframe>
            <Box
              style={{
                position: "absolute",
                bottom: "10px",
                right: 325,
                marginRight: "10px",
              }}
            >
              <OnlineUser />
            </Box>
            <Box style={{ position: "absolute", bottom: "10px", right: 100 }}>
              <ChatUser />
            </Box>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default UserInfo;
