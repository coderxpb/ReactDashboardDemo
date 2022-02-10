import { RoundedCard } from "./RoundedCard";
import {Box, Icon, Stack, Typography, useMediaQuery} from "@mui/material";
import { colors } from "../themes/colors";
import { useState } from "react";

interface PropsType {
  icon: any;
  icon2:any;
  title: string;
  storage: string | number;
  color?: string;
  selected: string;
  value: string;
}
export const WeeklyReportsCard = (props: PropsType) => {
  const { icon, title, storage, color, value, selected, icon2 } = props;
  const border = color ? "1px solid " + color : "none";

  const desktopSize = useMediaQuery('(min-width: 1536px)');
  const tabletSize = useMediaQuery('(min-width: 900px)');

  const iconStyle = {
    border: border,
    borderRadius: "7px",
    padding: "5px",
    marginTop: `${tabletSize?'5px':'10px'}`,
    marginBottom: `${tabletSize?'18px':'28px'}`,
    fontSize: `${tabletSize?'':'40px'}`
  };

  return selected == value ? (
    <RoundedCard maxWidth={tabletSize?"120px":"200px"}>
      <Stack sx={{ alignItems: "center", marginTop: `${tabletSize?'14px':'28px'}`, marginBottom: `${tabletSize?'14px':'28px'}` }}>
        <Icon sx={{...iconStyle, backgroundColor: color}}>{icon2}</Icon>

        <Typography
          variant={"body2"}
          sx={{ fontSize: `${tabletSize?'12px':'20px'}`, color: colors.primary }}
        >
          {title}
        </Typography>
        <Box sx={{height: "14px"}}/>
        <RoundedCard maxWidth={"95%"} maxHeight={"40px"} backgroundColor={color}>
          <Stack
            sx={{
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant={"h6"} sx={{ color: "white", fontWeight: 600, fontSize: `${tabletSize?'':'26px'}` }}>
              {storage} Gb
            </Typography>
          </Stack>
        </RoundedCard>

      </Stack>
    </RoundedCard>
  ) : (
    <RoundedCard maxWidth={tabletSize?"120px":"200px"}>
      <Stack sx={{ alignItems: "center", marginTop: `${tabletSize?'14px':'28px'}`, marginBottom: `${tabletSize?'14px':'28px'}`}}>
        <Icon sx={iconStyle}>{icon}</Icon>
        <Typography
          variant={"body2"}
          sx={{fontSize: `${tabletSize?'12px':'20px'}`, color: colors.primary }}
        >
          {title}
        </Typography>

        <Typography
          variant={"h6"}
          sx={{ color: colors.primary, fontWeight: 600, margin: "-3px", fontSize: `${tabletSize?'':'26px'}` }}
        >
          {storage} Gb
        </Typography>
      </Stack>
    </RoundedCard>
  );
};
