import {Box, Stack, Typography} from "@mui/material";
import {UpdatingMonitoringCard} from "./UpdatingMonitoring.Card";
import {colors} from "../colors";

export const UpdateMonitoringLayout = () => {

  return (
    <Stack direction={'row'}>
      <UpdatingMonitoringCard title={"System Files"} date={"December 2019"} color={colors.red} backgroundColor={"white"} textColor={colors.primary} progress={25}/>
      <UpdatingMonitoringCard title={"Applications"} date={"December 2019"} color={colors.orange} backgroundColor={colors.primary} textColor={"white"} progress={50}/>
    </Stack>
  )

}