import { RoundedCard } from "./RoundedCard";
import { Box, Icon, Stack, Typography } from "@mui/material";
import { colors } from "../colors";
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
  const iconStyle = {
    border: border,
    borderRadius: "7px",
    padding: "5px",
    marginTop: "5px",
    marginBottom: "18px",
  };

  return selected == value ? (
    <RoundedCard maxWidth={"120px"}>
      <Stack
        sx={{ alignItems: "center", marginTop: "14px", marginBottom: "-1px" }}
      >
        <Icon sx={{...iconStyle, backgroundColor: color}}>{icon2}</Icon>


        <Typography
          variant={"body2"}
          sx={{ fontSize: "12px", color: colors.primary }}
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
            <Typography variant={"h6"} sx={{ color: "white", fontWeight: 600 }}>
              {storage} Gb
            </Typography>
          </Stack>
        </RoundedCard>

      </Stack>
    </RoundedCard>
  ) : (
    <RoundedCard maxWidth={"120px"}>
      <Stack
        sx={{ alignItems: "center", marginTop: "14px", marginBottom: "14px" }}
      >
        <Icon sx={iconStyle}>{icon}</Icon>
        <Typography
          variant={"body2"}
          sx={{ fontSize: "12px", color: colors.primary }}
        >
          {title}
        </Typography>

        <Typography
          variant={"h6"}
          sx={{ color: colors.primary, fontWeight: 600, margin: "-3px" }}
        >
          {storage} Gb
        </Typography>
      </Stack>
    </RoundedCard>
  );
};
