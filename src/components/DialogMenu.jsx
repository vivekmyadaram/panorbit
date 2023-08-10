import { Button, Dialog, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function DialogMenu({ open, setOpen, data }) {
  const { users } = useSelector((state) => state.users.value);
  const { userId } = useParams();
  const userRel = users?.filter((u) => {
    if (u.id === parseInt(userId) + 1 || u.id === parseInt(userId) + 2) {
      return u;
    }
  });

  return (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          position: "absolute",
          top: "66px",
          right: 0,
        },
      }}
    >
      <Stack p={3} justifyContent="center" alignItems="center">
        <img
          src={data?.profilepicture}
          alt="profieInfo"
          style={{ borderRadius: "50%", width: "80px", objectFit: "cover" }}
        />
        <Typography variant="body1">{data?.name}</Typography>
        <Typography variant="caption" pb={1}>
          {data?.email}
        </Typography>

        {userRel?.map((u) => {
          return (
            <Link
              key={u.id}
              style={{ textDecoration: "none", color: "black" }}
              to={`/${u.id}/profile`}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                p={1}
              >
                <img
                  src={u?.profilepicture}
                  alt="profieInfo"
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="subtitle2">{u?.name}</Typography>
              </Stack>
            </Link>
          );
        })}

        <Link to="/">
          <Button
            variant="contained"
            sx={{ m: 1 }}
            color="error"
            onClick={() => setOpen(!open)}
          >
            Sign Out
          </Button>
        </Link>
      </Stack>
    </Dialog>
  );
}

export default DialogMenu;
