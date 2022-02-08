import { Card } from "@mui/material";
import { ReactElement } from "react";

interface PropsType {
  children: ReactElement | ReactElement[] | any;
  borderRadius?: string;
  maxWidth?: string;
  maxHeight?: string;
  marginTop?: string;
}
export const RoundedCard = (props: PropsType) => {
  let { children, borderRadius, maxWidth, maxHeight, marginTop} = props;
  borderRadius = borderRadius || "15px";
  maxWidth = maxWidth || "160px";
  maxHeight = maxHeight || "auto";
  marginTop = marginTop || "0";

  return (
    <Card
      sx={{
        borderRadius: borderRadius,
        width: maxWidth,
        margin: "2px",
        height: maxHeight
      }}
    >
      {children}
    </Card>
  );
};
