import "./App.css";
import Box from "@mui/material/Box";
import TodayProgressCard from "./component/TodayProgressCard";
import PastDueCard from "./component/PastDueCard";
import MonthOFDate from "./component/MonthToDate";
import OrderTab from "./component/OrderTabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#fff",
    },
    danger: {
      main: "#941A19",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", margin: "0 auto", backgroundColor: "#F5F4FA" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 1,
            mx: 5,
          }}
        >
          <TodayProgressCard />
          <PastDueCard />
          <MonthOFDate />
        </Box>
        <Box sx={{ my: 3, mx: 5 }}>
          <OrderTab />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
