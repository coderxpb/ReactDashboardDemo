import { Card } from "@mui/material";
import { ReactElement } from "react";
import {colors} from "../colors";

interface PropsType {
  children: ReactElement | ReactElement[] | any;
  borderRadius?: string;
  maxWidth?: string;
  maxHeight?: string;
  marginTop?: string;
  backgroundColor?: string;
  border?:string;
}
export const RoundedCard = (props: PropsType) => {
  let { children, borderRadius, maxWidth, maxHeight, marginTop, backgroundColor,border} = props;
  borderRadius = borderRadius || "20px";
  backgroundColor= backgroundColor || 'white';
  maxWidth = maxWidth || "160px";
  maxHeight = maxHeight || "auto";
  marginTop = marginTop || "0";
  border = border || `2px solid ${colors.darkGray}`;

  return (
    <Card
      sx={{
        borderRadius: borderRadius,
        width: maxWidth,
        margin: "2px",
        height: maxHeight,
        backgroundColor: backgroundColor,
        border: border,
        boxShadow: `0px 0px 6px ${colors.darkGray}`
      }}
    >
      {children}
    </Card>
  );
};
