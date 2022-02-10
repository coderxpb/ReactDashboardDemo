import {Box, Stack, Typography, useMediaQuery} from "@mui/material";
import {UpdatingMonitoringCard} from "./UpdatingMonitoring.Card";
import {colors} from "../themes/colors";

export const UpdateMonitoringLayout = () => {
  const desktopSize = useMediaQuery('(min-width:1536px)');
  const tabletSize = useMediaQuery('(min-width:900px)');
  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={desktopSize? 'space-between':tabletSize?'flex-start':'center'} gap={desktopSize?'':'14px'}>
      <UpdatingMonitoringCard title={"System Files"} date={"December 2019"} color={colors.red} backgroundColor={"white"} textColor={colors.primary} progress={25}/>
      <UpdatingMonitoringCard title={"Applications"} date={"December 2019"} color={colors.orange} backgroundColor={colors.primary} textColor={"white"} progress={50}/>
    </Stack>
  )

}