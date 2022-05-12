import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ProgressBar from "../ProgressBar";
import Divider from "@mui/material/Divider";

const PastDueCard = () => {
  return (
    <Card sx={{ width: "20%", boxShadow: "rgb(0 0 0 / 5%) 0px 1px 1px 0px" }}>
      <Typography
        variant="button"
        display="block"
        sx={{ px: 2, py: 0.5, fontWeight: 700 }}
      >
        past due
      </Typography>
      <Divider />
      <CardContent sx={{ display: "flex" }}>
        <ProgressBar
          orderNo={1}
          percent={40}
          orderStatus="past due"
          color={"#930e13"}
        />
      </CardContent>
    </Card>
  );
};

export default PastDueCard;
