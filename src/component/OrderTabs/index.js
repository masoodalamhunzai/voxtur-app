import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import OrderTable from "../OrderTable";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function createData(orderDate, address, orderType, dueDate, completeDate, fee) {
  return { orderDate, address, orderType, dueDate, completeDate, fee };
}
const rows = [
  createData(
    "1/3/2023",
    "125 Main street UK",
    " Opinion Letter",
    "1/6/2002",
    "1/5/2022",
    "$2000"
  ),
  createData(
    "2/5/2022",
    "114 Main street USA",
    "Attorney  Letter",
    "1/9/2021",
    "1/5/2032",
    "$6000"
  ),
  createData(
    "6/7/2021",
    "435 Main street UK",
    "Attorney Opinion Letter",
    "1/5/2022",
    "1/5/2022",
    "$2000"
  ),
  createData(
    "1/1/2022",
    "907 Main street UAE",
    "Attorney Opinion ",
    "1/9/2012",
    "4/3/2012",
    "$1000"
  ),
  createData(
    "1/3/2023",
    "125 Main street UK",
    " Opinion Letter",
    "1/6/2002",
    "1/5/2022",
    "$2000"
  ),
  createData(
    "2/5/2022",
    "114 Main street USA",
    "Attorney  Letter",
    "1/9/2021",
    "1/5/2032",
    "$6000"
  ),
  createData(
    "6/7/2021",
    "435 Main street UK",
    "Attorney Opinion Letter",
    "1/5/2022",
    "1/5/2022",
    "$2000"
  ),
  createData(
    "1/1/2022",
    "907 Main street UAE",
    "Attorney Opinion ",
    "1/9/2012",
    "4/3/2012",
    "$1000"
  ),
  createData(
    "1/3/2023",
    "125 Main street UK",
    " Opinion Letter",
    "1/6/2002",
    "1/5/2022",
    "$2000"
  ),
  createData(
    "2/5/2025",
    "114 Main street USA",
    "Attorney  Letter",
    "1/9/2021",
    "1/5/2032",
    "$6000"
  ),
  createData(
    "6/7/2027",
    "435 Main street UK",
    "Attorney Opinion Letter",
    "1/5/2022",
    "1/5/2022",
    "$2000"
  ),
  createData(
    "1/1/2028",
    "907 Main street UAE",
    "Attorney Opinion ",
    "1/9/2019",
    "4/3/2012",
    "$1000"
  ),
];
const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e5e5e5",
  "& .MuiTabs-indicator": {
    backgroundColor: "primary",
    borderBottom: "1px solid #305DC2",
    borderRadius: "5px",
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            pt: 0,
            minHeight: "100vh",
          }}
        >
          <>{children}</>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const OrderTab = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          borderColor: "transparent",
          mx: 1,
        }}
      >
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="flex-wrap"
          sx={{
            "& .MuiTab-root": {
              color: "#afafaf",
            },
          }}
        >
          <Tab
            label="available orders"
            {...a11yProps(0)}
            sx={{ fontWeight: "600" }}
          />
          <Tab
            label="current orders"
            sx={{ mx: 5, fontWeight: "600" }}
            {...a11yProps(1)}
          />
          <Tab label="completed" {...a11yProps(2)} sx={{ fontWeight: "600" }} />
        </AntTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OrderTable
          rows={rows}
          buttonLabel="accept order"
          icon={""}
          status="availableOrder"
          isModalOpen={true}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderTable
          rows={rows}
          buttonLabel="current Order"
          status=""
          icon={<ArrowRightIcon />}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderTable
          rows={rows}
          buttonLabel="download"
          status="complete"
          icon={<ArrowCircleDownIcon sx={{ fontSize: "1.2rem", mx: 0.5 }} />}
        />
      </TabPanel>
    </Box>
  );
};

export default OrderTab;
