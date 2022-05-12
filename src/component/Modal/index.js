import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from "@mui/material/Modal";

const scroll = {
  "&::-webkit-scrollbar": {
    width: "7px",
    height: "80px",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    borderRadius: " 5px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#1976D2",
  },
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  overflowY: "auto",
  transform: "translate(-50%, -50%)",
  minWidth: "68%",
  bgcolor: "background.paper",
  border: "0px ",
  boxShadow: 24,
  p: 0,
};
const fontStyle = {
  "&.MuiTypography-root": {
    fontSize: "0.875rem",
    fontFamily: "Inter",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  },
};

const acceptOrderArray = [
  {
    item: "order type",
    value: "attorney opnion letter",
  },
  {
    item: "property address",
    value: "123 main street, attorney usa 1111",
  },
  {
    item: "order date",
    value: "1/1/2022",
  },
  {
    item: "due date",
    value: "1/5/2022",
  },
  {
    item: "fee",
    value: "$300",
  },
  {
    item: "scope of work",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum nd more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const BasicModal = ({ open, handleClose }) => {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <Box sx={style}>
        <Box
          sx={{
            backgroundColor: "blue",
            height: "120px",
            textTransform: "capitalize",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            px: 5,
            py: 4,
            opacity: "0.8",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "end",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <ClearIcon sx={{ opacity: "0.7", fontSize: "1.8rem" }} />
          </span>

          <Typography
            variant="h5"
            component="div"
            sx={{
              "&.MuiTypography-root": {
                fontSize: "1.875rem",
                fontFamily: "Inter",
              },
            }}
          >
            accept order
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            sx={{ opacity: "0.8", fontSize: "0.875rem" }}
          >
            review order details, and accept orders for complition.
          </Typography>
        </Box>

        <Box sx={{ px: 5 }}>
          <List sx={{ width: "100%", bgcolor: "background.paper", pt: 2 }}>
            {acceptOrderArray &&
              acceptOrderArray.map((order) => (
                <>
                  <ListItem
                    alignItems="flex-start"
                    sx={{
                      display: "flex",
                      px: 0,
                      py: 0.5,
                    }}
                  >
                    <Typography
                      variant="body2"
                      display="block"
                      color="primary"
                      sx={{
                        minWidth: 200,
                        textTransform: "uppercase",
                        ...fontStyle,
                      }}
                    >
                      {order.item}
                    </Typography>
                    <Typography
                      variant="body2"
                      display="block"
                      gutterBottom
                      sx={
                        order.value.length > 100
                          ? {
                              ...fontStyle,
                              overflowY: "scroll",
                              width: "100%",
                              py: 0.5,
                              pr: 1,
                              height: "110px",
                              ...scroll,
                            }
                          : {
                              maxHeight: "100px",
                              width: "100%",
                              textTransform: "capitalize",
                              ...fontStyle,
                            }
                      }
                    >
                      {order.value}
                    </Typography>
                  </ListItem>
                  <Divider component="li" />
                </>
              ))}
          </List>
        </Box>
        <Box
          sx={{
            px: 5,
            mb: 3,
            width: "90%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControlLabel
            sx={{
              "&.MuiFormControlLabel-label": {
                fontSize: "0.875rem !important",
              },
              "&.MuiTypography-root": { fontSize: "0.875rem !important" },
            }}
            control={
              <Checkbox
                checked
                onChange={handleChange}
                name="antoine"
                sx={{ mr: 2 }}
              />
            }
            label="I certify that I understand and accept the scope of work for the assigment"
          />
        </Box>
        <Box sx={{ px: 5, mb: 5, display: "flex", justifyContent: "end" }}>
          <Button variant="contained" size="large" sx={{ px: 5 }}>
            accept order
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default BasicModal;
