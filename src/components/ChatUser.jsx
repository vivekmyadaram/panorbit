import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatIcon from "@mui/icons-material/ModeCommentOutlined";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import OnlineShow from "@mui/icons-material/CircleOutlined";
import { setUserOnline } from "./RTK/UsersSlice";

function ChatUser() {
  const { users } = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div sx={{ width: "100px" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "blue",
            color: "white",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Stack direction="row" spacing={2}>
            <ChatIcon />
            <Typography variant="body1">Chats</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {users &&
            users.map((user) => {
              return (
                <Stack
                  direction="row"
                  justifyContent="left"
                  alignItems="center"
                  spacing={2}
                  key={user?.id}
                >
                  <img
                    src={user?.profilepicture}
                    style={{ borderRadius: "50%", width: "30px" }}
                    alt="ProfileImage"
                  />
                  <Typography variant="subtitle2">{user?.username}</Typography>
                  {user?.id % 2 == 0 && (
                    <OnlineShow
                      onClick={() => dispatch(setUserOnline(user?.id))}
                      fontSize="small"
                      sx={{ color: "green" }}
                    />
                  )}
                </Stack>
              );
            })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ChatUser;
