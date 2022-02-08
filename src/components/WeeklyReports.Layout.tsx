import {Box, Container, Stack, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import { WeeklyReportsCard } from "./WeeklyReports.Card";
import StorageIcon from "@mui/icons-material/Storage";
import { MusicNoteOutlined } from "@mui/icons-material";
import { DeleteOutlined } from "@mui/icons-material";
import { CameraOutlined } from "@mui/icons-material";
import {useState} from "react";
import {colors} from "../colors";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const WeeklyReportsLayout = () => {
  const [selected, setSelected] = useState("none");
  const [selectedMode, setSelectedMode] = useState<"daily" | "weekly" | "monthly">("weekly");
  const storage = {"daily": [2.2, 1.63, 3.11, 4], "weekly": [35, 1.25, 16.35, 12.10], "monthly": [55.20, 4.42, 39, 50.40]};

  const changeSelected = (e: React.MouseEvent<HTMLElement>, newValue: "string") => setSelected(newValue);
  const changeMode = (e: React.SyntheticEvent, newValue: "daily"|"weekly"|"monthly") => setSelectedMode(newValue);

  return (
    <Stack>
    <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography variant={'h6'} sx={{color: colors.primary}}>Weekly Reports</Typography>
      <Tabs
        value = {selectedMode}
        onChange={changeMode}
        TabIndicatorProps={{style: {backgroundColor: 'transparent'}}}
      >
        <Tab disableRipple value={"daily"} label={"Daily"} sx={{textTransform: 'none', color: colors.primary}}/>
        <Tab disableRipple value={"weekly"} label={"Weekly"} sx={{textTransform: 'none', color: colors.primary}}/>
        <Tab disableRipple value={"monthly"} label={"Monthly"} sx={{textTransform: 'none', color: colors.primary}}/>
      </Tabs>
    </Stack>

    <ToggleButtonGroup onChange={changeSelected} sx={{marginLeft: "-10px"}}>
      <ToggleButton disableRipple value={"system"} sx={{border:"none", textTransform: "none"}}>
        <WeeklyReportsCard
          icon={<StorageIcon sx={{ color: "orange", marginBottom: "4px" }} />}
          icon2={<StorageIcon sx={{color: "white", marginBottom: "4px"}}/>}
          color={colors.orange}
          title={"System Junk"}
          storage={storage[selectedMode][0]}
          value={"system"}
          selected={selected}
        />
      </ToggleButton>

      <ToggleButton disableRipple value={"itunes"} sx={{border:"none", textTransform: "none"}}>
        <WeeklyReportsCard
          icon={<MusicNoteOutlined sx={{ color: "red", marginBottom: "4px" }} />}
          icon2={<MusicNoteOutlined sx={{color: "white", marginBottom: "4px"}}/>}
          color={colors.red}
          title={"iTunes Junk"}
          storage={storage[selectedMode][1]}
          value={"itunes"}
          selected={selected}
        />
      </ToggleButton>

      <ToggleButton disableRipple value={"trash"} sx={{border:"none", textTransform: "none"}}>
        <WeeklyReportsCard
          icon={<DeleteOutlined sx={{ color: "skyblue", marginBottom: "4px" }} />}
          icon2={<DeleteOutlined sx={{color: "white", marginBottom: "4px"}}/>}
          color={colors.blue}
          title={"Trash Bins"}
          storage={storage[selectedMode][2]}
          value={"trash"}
          selected={selected}
        />
      </ToggleButton>

      <ToggleButton disableRipple value={"photo"} sx={{border:"none", textTransform: "none"}}>
        <WeeklyReportsCard
          icon={<CameraOutlined sx={{ color: "blueviolet", marginBottom: "4px" }} />}
          icon2={<CameraOutlined sx={{color: "white", marginBottom: "4px"}}/>}
          color={colors.primary}
          title={"Photo Junk"}
          storage={storage[selectedMode][3]}
          value={"photo"}
          selected={selected}
        />
      </ToggleButton>
    </ToggleButtonGroup>
    </Stack>
  );
};
