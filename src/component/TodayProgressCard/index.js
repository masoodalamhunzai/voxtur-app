import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ProgressBar from "../ProgressBar";
import Divider from "@mui/material/Divider";

const TodayProgressCard = () => {
  return (
    <Card sx={{ width: "55%", boxShadow: "rgb(0 0 0 / 5%) 0px 1px 1px 0px" }}>
      <Typography
        variant="button"
        display="block"
        sx={{ px: 2, py: 0.5, fontWeight: 700 }}
      >
        today
      </Typography>
      <Divider />
      <CardContent sx={{ display: "flex" }}>
        <ProgressBar orderNo={2} percent={60} orderStatus="available order" />
        <ProgressBar orderNo={2} percent={60} orderStatus="current order" />
        <ProgressBar orderNo={3} percent={55} orderStatus="completed" />
      </CardContent>
    </Card>
  );
};

export default TodayProgressCard;
