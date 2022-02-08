import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeeklyReportsCard } from "./components/WeeklyReports.Card";
import StorageIcon from "@mui/icons-material/Storage";
import { Box } from "@mui/material";
import { WeeklyReportsLayout } from "./components/WeeklyReports.Layout";
import { OtherFunctionsCard } from "./components/OtherFunctions.Card";
import { EqualizerRounded } from "@mui/icons-material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="App" sx={{ backgroundColor: "hsl(250,10%,90%)" }}>
      <WeeklyReportsLayout />
      <OtherFunctionsCard
        icon={
          <EqualizerRounded
            sx={{
              color: "white",
              backgroundColor: "rgba(255,255,255,0.5)",
              marginTop: "3px",
              padding: "4px",
              borderRadius: "9px",
              marginLeft: "6px",
            }}
          />
        }
        title={"Optimization"}
        color={"#FF0000"}
      />
    </Box>
  );
}

export default App;
