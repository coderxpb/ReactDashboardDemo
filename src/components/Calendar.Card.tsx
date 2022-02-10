import {RoundedCard} from "./RoundedCard";
import {Stack, Typography} from "@mui/material";
import {FiberManualRecord} from "@mui/icons-material";
import {colors} from "../themes/colors";
import {useState} from "react";

interface PropsType{
  day: string;
  date: number;
  color: string;
}

export const CalendarCard = (props: PropsType) => {
  const {day, date, color} = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onHover = () => setIsHovered(true);
  const onHoverLeave = () => setIsHovered(false);

  return (
    <RoundedCard maxWidth={'48px'} maxHeight={'84px'} border={'2px solid transparent'} boxShadow={'none'}>
      <Stack justifyContent={'center'} alignItems={'center'} height={'100%'} onMouseEnter={onHover} onMouseLeave={onHoverLeave} bgcolor={isHovered? colors.red: 'white'}>
        <Typography color={isHovered?'white':colors.primary} fontSize={'14px'}><strong>{day}</strong></Typography>
        <Stack marginTop={'8px'} alignItems={'center'} justifyContent={'center'}>
          <Typography color={isHovered?'white':colors.darkerGray} fontSize={'15px'}>{date}</Typography>
          <FiberManualRecord sx={isHovered?{color: 'white', fontSize: '10px'}:{color: color, fontSize: '7px'}}/>
        </Stack>
      </Stack>
    </RoundedCard>
  )
}