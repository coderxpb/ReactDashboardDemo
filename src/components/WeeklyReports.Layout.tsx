import { Box, Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { WeeklyReportsCard } from "./WeeklyReports.Card";
import StorageIcon from "@mui/icons-material/Storage";
import { MusicNoteOutlined } from "@mui/icons-material";
import { DeleteOutlined } from "@mui/icons-material";
import { CameraOutlined } from "@mui/icons-material";
import {useState} from "react";
import {colors} from "../colors";

export const WeeklyReportsLayout = () => {
  const [selected, setSelected] = useState("none")

  const changeSelected = (e: React.MouseEvent<HTMLElement>, newValue: "string") => setSelected(newValue);

  return (
    <ToggleButtonGroup onChange={changeSelected}>
      <ToggleButton disableRipple value={"system"} sx={{border:"none", textTransform: "none"}}>
        <WeeklyReportsCard
          icon={<StorageIcon sx={{ color: "orange", marginBottom: "4px" }} />}
          icon2={<StorageIcon sx={{color: "white", marginBottom: "4px"}}/>}
          color={colors.orange}
          title={"System Junk"}
          storage={"35.55"}
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
          storage={"1.25"}
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
          storage={"16.35"}
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
          storage={"12.10"}
          value={"photo"}
          selected={selected}
        />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
