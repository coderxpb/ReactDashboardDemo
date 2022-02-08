import {RoundedCard} from "./RoundedCard";
import {Box, Divider, Stack, Typography} from "@mui/material";
import CircularProgress from "./CircularProgress";

interface PropsType{
  title: string;
  date: string;
  progress: number;
  color: string;
  textColor: string;
  backgroundColor: string;
}

export const UpdatingMonitoringCard = (props: PropsType) => {
  const {title, date, progress, color, textColor, backgroundColor} = props;

  return (
    <RoundedCard maxWidth={'260px'} maxHeight={'90px'} backgroundColor={backgroundColor}>
      <Stack direction={'row'} sx={{height: '100%', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
        <Stack sx={{ height: '100%', justifyContent:'center',alignItems: 'flex-start'}} spacing={1}>
          <Typography variant={'subtitle2'} sx={{fontWeight: 600,color: textColor}}>{title}</Typography>
          <Typography variant={'caption'} sx={{fontSize: 10, color: textColor}}>{date}</Typography>
        </Stack>
        <Divider variant={'middle'} orientation={'vertical'} color={textColor} flexItem/>
        <CircularProgress size={60} strokeWidth={4} percentage={progress} fillColor={color} textColor={textColor}/>
      </Stack>
    </RoundedCard>
  )
}