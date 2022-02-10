import {
  Button,
  FormControl, MenuItem, Select, SelectChangeEvent,
  Stack,
  Typography,
  useMediaQuery
} from "@mui/material";
import { WeeklyReportsCard } from "./WeeklyReports.Card";
import StorageIcon from "@mui/icons-material/Storage";
import { MusicNoteOutlined } from "@mui/icons-material";
import { DeleteOutlined } from "@mui/icons-material";
import { CameraOutlined } from "@mui/icons-material";
import {useState} from "react";
import {colors} from "../themes/colors";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const WeeklyReportsLayout = () => {
  const tabletSize = useMediaQuery('(min-width: 900px)');

  const [selected, setSelected] = useState("none");
  type ModesType = "Daily" | "Weekly" | "Monthly";
  const [selectedMode, setSelectedMode] = useState<ModesType>("Weekly");
  const storage = {"Daily": [2.2, 1.63, 3.11, 4], "Weekly": [35, 1.25, 16.35, 12.10], "Monthly": [55.20, 4.42, 39, 50.40]};

  const changeSelected = (newValue: string) => setSelected(newValue);
  const changeMode = (e: React.SyntheticEvent, newValue: ModesType) => setSelectedMode(newValue);
  const changeSelect = (e: SelectChangeEvent) => setSelectedMode(e.target.value as ModesType);

  const iconSize = {fontSize: `${tabletSize?'':'40px'}`,marginBottom:`${tabletSize?'4px':'8px'}`}
  const buttonStyles = {border:"none", textTransform: "none",borderRadius: '25px'}
  const tabStyles = {textTransform: 'none', fontWeight:600};

  return (
    <Stack>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{zIndex: '10', marginBottom: '10px'}}>

        <Typography variant={'h6'} sx={{color: colors.primary}}>{selectedMode} Report</Typography>
        <Tabs
          value = {selectedMode}
          TabIndicatorProps={{style: {backgroundColor: 'transparent', zIndex: '10'}}}
          onChange={changeMode}
          sx={{display:`${tabletSize?'':'none'}`}}
        >
          <Tab disableRipple value={"Daily"} label={"Daily"} sx={tabStyles}/>
          <Tab disableRipple value={"Weekly"} label={"Weekly"} sx={tabStyles}/>
          <Tab disableRipple value={"Monthly"} label={"Monthly"} sx={tabStyles}/>
        </Tabs>

        <FormControl size={'small'} sx={{display:`${tabletSize?'none':'block'}`}}>
          <Select
            value={selectedMode}
            onChange={changeSelect}
            autoWidth
            sx={{ padding: 'none'}}
          >
            <MenuItem value={"Daily"}>Daily</MenuItem>
            <MenuItem value={"Weekly"}>Weekly</MenuItem>
            <MenuItem value={"Monthly"}>Monthly</MenuItem>
          </Select>
        </FormControl>

      </Stack>

      <Stack direction={'row'} justifyContent={tabletSize?'flex-start':'center'} sx={{marginLeft: "-10px", flexWrap: 'wrap'}} gap={'10px'} /*onMouseLeave={()=>changeSelected('none')}*/>
        <Button  disableRipple value={"system"} sx={buttonStyles} onMouseEnter={()=>changeSelected('system')}>
          <WeeklyReportsCard
            icon={<StorageIcon sx={{ color: "orange",...iconSize  }} />}
            icon2={<StorageIcon sx={{color: "white",...iconSize}}/>}
            color={colors.orange}
            title={"System Junk"}
            storage={storage[selectedMode][0]}
            value={"system"}
            selected={selected}
          />
        </Button>

        <Button disableRipple value={"itunes"} sx={buttonStyles} onMouseEnter={()=>changeSelected('itunes')}>
          <WeeklyReportsCard
            icon={<MusicNoteOutlined sx={{ color: "red", ...iconSize }} />}
            icon2={<MusicNoteOutlined sx={{color: "white", ...iconSize}}/>}
            color={colors.red}
            title={"iTunes Junk"}
            storage={storage[selectedMode][1]}
            value={"itunes"}
            selected={selected}
          />
        </Button>

        <Button disableRipple value={"trash"} sx={buttonStyles} onMouseEnter={()=>changeSelected('trash')}>
          <WeeklyReportsCard
            icon={<DeleteOutlined sx={{ color: "skyblue", ...iconSize }} />}
            icon2={<DeleteOutlined sx={{color: "white", ...iconSize}}/>}
            color={colors.blue}
            title={"Trash Bins"}
            storage={storage[selectedMode][2]}
            value={"trash"}
            selected={selected}
          />
        </Button>

        <Button disableRipple value={"photo"} sx={buttonStyles} onMouseEnter={()=>changeSelected('photo')}>
          <WeeklyReportsCard
            icon={<CameraOutlined sx={{ color: "blueviolet", ...iconSize }} />}
            icon2={<CameraOutlined sx={{color: "white", ...iconSize}}/>}
            color={colors.primary}
            title={"Photo Junk"}
            storage={storage[selectedMode][3]}
            value={"photo"}
            selected={selected}
          />
        </Button>
      </Stack>
    </Stack>
  );
};
