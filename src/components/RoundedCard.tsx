import { Card } from "@mui/material";
import { ReactElement } from "react";

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
  border = border || "none";

  return (
    <Card
      sx={{
        borderRadius: borderRadius,
        width: maxWidth,
        margin: "2px",
        height: maxHeight,
        backgroundColor: backgroundColor,
        border:border,
      }}
    >
      {children}
    </Card>
  );
};
