import {Button, ButtonGroup, Divider, Stack, Typography} from "@mui/material";
import {CalendarCard} from "./Calendar.Card";
import {colors} from "../themes/colors";
import {useState} from "react";
import {ArrowBackIos} from "@mui/icons-material";

const datesData = [[2,3,4,5,6,7,8],[9,10,11,12,13,14,15],[16,17,18,19,20,21,22]]
const colorData = [['r','g','o','o','g','o','r'],['r','r','o','r','g','o','r'],['o','g','g','o','g','o','g']]

export const CalendarLayout = () => {
  const [currentRange, setCurrentRange] = useState(0);
  const size = datesData.length - 1;

  const onRightArrow = () => (currentRange<size) && setCurrentRange((prev)=> prev+1);
  const onLeftArrow = () => (currentRange>0) && setCurrentRange((prev)=> prev-1);

  const colorMapper = (color: string): string => {switch (color){
    case "r": return colors.red;
    case "g": return colors.blue;
    case "o": return colors.orange;
    default: return 'white';
  }}

  return (
    <Stack>
      <Stack direction={'row'} marginBottom={'24px'}>
        <Typography variant={'h6'} sx={{color: colors.primary}}>December {datesData[currentRange][0]}-{datesData[currentRange][6]}</Typography>
        <ButtonGroup sx={{backgroundColor: colors.red, borderRadius: '25px', height: '32px', marginLeft: '18px', padding: 'none'}}>
          <Button disableRipple onClick={onLeftArrow} endIcon={<ArrowBackIos sx={{color: 'white', height: '17px'}}/>} sx={{border: 'none !important', width: '8px'}}/>
          <Button disableRipple onClick={onRightArrow} startIcon={<ArrowBackIos sx={{transform: 'rotate(180deg)', color: 'white', height: '17px'}}/>} sx={{border: 'none !important', width: '8px'}}/>
        </ButtonGroup>
      </Stack>
      <Divider/>
      <Stack margin={'10px 0 10px 0'} direction={'row'} flex={'100%'} width={'100%'} justifyContent={'space-around'}>
        <CalendarCard day={'Mon'} date={datesData[currentRange][0]} color={colorMapper(colorData[currentRange][0])}/>
        <CalendarCard day={'Tue'} date={datesData[currentRange][1]} color={colorMapper(colorData[currentRange][1])}/>
        <CalendarCard day={'Wed'} date={datesData[currentRange][2]} color={colorMapper(colorData[currentRange][2])}/>
        <CalendarCard day={'Thu'} date={datesData[currentRange][3]} color={colorMapper(colorData[currentRange][3])}/>
        <CalendarCard day={'Fri'} date={datesData[currentRange][4]} color={colorMapper(colorData[currentRange][4])}/>
        <CalendarCard day={'Sat'} date={datesData[currentRange][5]} color={colorMapper(colorData[currentRange][5])}/>
        <CalendarCard day={'Sun'} date={datesData[currentRange][6]} color={colorMapper(colorData[currentRange][6])}/>
      </Stack>
      <Divider/>
    </Stack>
  )
}