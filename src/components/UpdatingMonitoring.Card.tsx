import {RoundedCard} from "./RoundedCard";
import {Divider, Stack, Typography, useMediaQuery} from "@mui/material";
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
  const tabletSize = useMediaQuery('(min-width:900px)');

  return (
    <RoundedCard maxWidth={tabletSize?'270px':'320px'} maxHeight={tabletSize?'100px':'130px'} backgroundColor={backgroundColor}>
      <Stack direction={'row'} sx={{height: '100%', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
        <Stack sx={{ height: '100%', justifyContent:'center',alignItems: 'flex-start'}} spacing={1}>
          <Typography variant={'subtitle2'}
                      sx={{fontWeight: 600, fontSize: `${tabletSize?'15px':'22px'}`, color: textColor}}>
            {title}
          </Typography>
          <Typography variant={'caption'}
                      sx={{fontSize: `${tabletSize?'10px':'13px'}`, color: textColor}}>
            {date}
          </Typography>
        </Stack>

        <Divider variant={'middle'} orientation={'vertical'} color={textColor} flexItem/>
        <CircularProgress size={65} strokeWidth={6} percentage={progress} fillColor={color} textColor={textColor}/>
      </Stack>
    </RoundedCard>
  )

}