import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeeklyReportsCard } from "./components/WeeklyReports.Card";
import StorageIcon from "@mui/icons-material/Storage";
import { Box } from "@mui/material";
import { WeeklyReportsLayout } from "./components/WeeklyReports.Layout";
import { OtherFunctionsCard } from "./components/OtherFunctions.Card";
import { EqualizerRounded } from "@mui/icons-material";
import {OtherFunctionsLayout} from "./components/OtherFunctions.Layout";
import {UpdatingMonitoringCard} from "./components/UpdatingMonitoring.Card";
import {UpdateMonitoringLayout} from "./components/UpdateMonitoring.Layout";
import VerticalTabs from "./components/SideMenu";
import SideMenu from "./components/SideMenu";

function Testing() {
  const [count, setCount] = useState(0);

  return (
    <Box className="App" sx={{ backgroundColor: "#fbfbfd"}}>
      <WeeklyReportsLayout />
      <OtherFunctionsLayout />
      <UpdateMonitoringLayout/>
      <SideMenu/>
    </Box>
  );
}

export default Testing;
