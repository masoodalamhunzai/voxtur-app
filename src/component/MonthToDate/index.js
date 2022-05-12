import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ProgressBar from "../ProgressBar";
import Divider from "@mui/material/Divider";

const MonthToDate = () => {
  return (
    <Card sx={{ width: "20%", boxShadow: "rgb(0 0 0 / 5%) 0px 1px 1px 0px" }}>
      <Typography
        variant="button"
        display="block"
        sx={{ px: 2, py: 0.5, fontWeight: 700 }}
      >
        month to date
      </Typography>
      <Divider />
      <CardContent sx={{ display: "flex" }}>
        <ProgressBar orderNo={52} percent={80} orderStatus="completed" />
      </CardContent>
    </Card>
  );
};

export default MonthToDate;
