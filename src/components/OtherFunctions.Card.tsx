import { RoundedCard } from "./RoundedCard";
import {alpha, Box, Stack, styled, Switch, Typography, useMediaQuery} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { colors } from "../themes/colors";
import {ChangeEvent, useState} from "react";

interface PropsType {
  icon: any;
  title: string;
  color: string;
}

export const OtherFunctionsCard = (props: PropsType) => {
  const { icon, title, color } = props;
  const [isOn, setIsOn] = useState<boolean>(true);

  const desktopSize = useMediaQuery('(min-width: 1536px)');
  const tabletSize = useMediaQuery('(min-width: 900px)');

  const onSwitchClicked = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => setIsOn(checked);
  const border = "1px solid " + colors.darkGray;

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: color,
      "&:hover": {
        backgroundColor: alpha(color, theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: color,
    },
  }));

  return (
    <RoundedCard maxWidth={desktopSize?"180px":"240px"} backgroundColor={isOn?'white':colors.lightGray} border={isOn?"1px solid transparent":border}>
      <Stack sx={{padding: "2px", marginLeft: '2px'}}>
        <RoundedCard maxWidth={"95%"} maxHeight={desktopSize?"40px":"64px"} backgroundColor={isOn?color: colors.darkGray}>
          <Stack direction={"row"} sx={{height: "100%",alignItems: "center", justifyContent: "space-between" }}>
            <Box>
              {icon}
            </Box>
            <MoreVert sx={isOn?{ color: "white" }:{color: colors.darkerGray}} />
          </Stack>
        </RoundedCard>
        <Box sx={{height: "16px"}}/>
        <Stack direction={"row"} sx={{ justifyContent: "space-between", alignItems: "center", marginBottom: "9px"}}>
          <Typography color={isOn?colors.primary:colors.darkerGray} variant={"body2"} sx={{fontWeight: "600",marginLeft: "8px", fontSize:`${desktopSize?'': '18px'}`}}>
            {title}
          </Typography>
          <CustomSwitch defaultChecked={isOn} onChange={onSwitchClicked}/>
        </Stack>

      </Stack>
    </RoundedCard>
  );
};
