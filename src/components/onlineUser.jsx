import Arrow from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Paper, Stack } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserOnline } from "./RTK/UsersSlice";

function OnlineUser() {
  const { onlineUser } = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {Object.keys(onlineUser).length && (
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
            <Stack direction="row" spacing={10}>
              <Stack
                direction="row"
                justifyContent="left"
                alignItems="center"
                spacing={1}
              >
                <img
                  src={onlineUser?.profilepicture}
                  alt="chatImage"
                  width="30px"
                  style={{ borderRadius: "50%" }}
                />
                <Typography variant="caption">
                  {onlineUser?.username}
                </Typography>
              </Stack>

              <CloseIcon
                fontSize="small"
                onClick={() => dispatch(setUserOnline({}))}
              />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Paper sx={{ padding: 3, overflow: "scroll", overflowX: "hidden" }}>
              <Typography>Lorem, ipsum dolor.</Typography>
            </Paper>
            <Arrow
              sx={{
                position: "relative",
                left: 180,
                top: 10,
              }}
            />
          </AccordionDetails>
        </Accordion>
      )}
    </>
  );
}

export default OnlineUser;
