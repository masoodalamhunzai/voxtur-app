import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const ProgressBar = ({ orderNo, orderStatus, percent, color }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? color : color,
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        flexDirection: "column",
        mx: 2,
      }}
    >
      <Typography variant="h2" gutterBottom component="div">
        {orderNo}
      </Typography>
      <BorderLinearProgress
        variant="determinate"
        value={percent}
        sx={{ width: "100%" }}
      />
      <Typography variant="button" display="block" sx={{ marginTop: "0.8rem" }}>
        {orderStatus}
      </Typography>
    </Box>
  );
};
export default ProgressBar;
