import { Card } from "@mui/material";
import { ReactElement } from "react";
import {colors} from "../colors";

interface PropsType {
  children: ReactElement | ReactElement[] | any;
  borderRadius?: string;
  maxWidth?: string;
  maxHeight?: string;
  margin?: string;
  backgroundColor?: string;
  border?:string;
  backgroundImage?: any;
  backgroundPosition?: string;
  boxShadow?: string;
  display?: string;
}
export const RoundedCard = (props: PropsType) => {
  let { children, borderRadius, maxWidth, maxHeight, margin, backgroundColor,border, backgroundImage, boxShadow, display,backgroundPosition} = props;
  borderRadius = borderRadius || "20px";
  backgroundColor= backgroundColor || 'white';
  maxWidth = maxWidth || "160px";
  maxHeight = maxHeight || "auto";
  margin = margin || "2px";
  border = border || `2px solid ${colors.darkGray}`;
  boxShadow = boxShadow || `0px 0px 6px ${colors.darkGray}`;

  return (
    <Card
      sx={{
        borderRadius,
        display,
        width: maxWidth,
        margin,
        height: maxHeight,
        backgroundColor,
        border,
        boxShadow,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '160px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '101% 40%'
      }}
    >
      {children}
    </Card>
  );
};
