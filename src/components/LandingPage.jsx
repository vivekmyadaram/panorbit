import { Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LandingPage() {
  const { users } = useSelector((state) => state?.users.value);
  return (
    <Container maxWidth="md">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Paper
          elevation={3}
          sx={{
            height: 450,
            width: 600,
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            align="center"
            sx={{
              color: "#000000",
              backgroundColor: "lightgrey",
              p: 3,
              borderBottom: "1px solid black",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            Select an account
          </Typography>
          <Box
            sx={{
              overflow: "scroll",
              height: 360,
              overflowX: "hidden",
            }}
          >
            {users &&
              users.map((user) => <User key={user.id} userList={user} />)}
          </Box>
        </Paper>
      </Stack>
    </Container>
  );
}

export default LandingPage;

function User({ userList }) {
  return (
    <Link
      to={`${userList?.id}`}
      style={{ textDecoration: "none", color: "#000000" }}
    >
      <Stack
        direction="row"
        justifyContent="left"
        alignItems="center"
        spacing={2}
        p={1}
        m={2}
        sx={{
          borderBottom: "1px solid grey",
          width: "100%",
        }}
      >
        <img
          src={userList?.profilepicture}
          alt="profilePic"
          style={{
            borderRadius: "50%",
            width: "60px",
            marginLeft: "20px",
          }}
        />
        <Typography variant="h6" gutterBottom align="center">
          {userList.name}
        </Typography>
      </Stack>
    </Link>
  );
}
