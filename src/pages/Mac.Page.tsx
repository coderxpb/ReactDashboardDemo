import {Avatar, Stack, Typography} from "@mui/material";
import {RoundedCard} from "../components/RoundedCard";
import {colors} from "../colors";
import {WeeklyReportsLayout} from "../components/WeeklyReports.Layout";
import {UpdateMonitoringLayout} from "../components/UpdateMonitoring.Layout";
import {NotificationsNoneOutlined, Settings} from "@mui/icons-material";
import {OtherFunctionsLayout} from "../components/OtherFunctions.Layout";
import macbook from "../images/macbook.png"
import {CalendarLayout} from "../components/Calendar.Layout";
export const MacPage = () => {

  return (
    <Stack direction={'row'} sx={{width: '100%', gap: '180px'}}>
      {/*left group*/}
      <Stack>
        <CalendarLayout />

        <RoundedCard backgroundColor={colors.orange} maxWidth={'580px'} backgroundImage={macbook} >
          <Typography variant={"h4"} sx={{fontWeight: 600, color: 'white', margin: '50px 0 0 50px'}}>Hello, Barbara!</Typography>
          <Typography variant={"body1"} sx={{color: 'rgba(255,255,255,0.8)', margin: '0 0 50px 50px'}} >Welcome back to Clean My Mac</Typography>
        </RoundedCard>

        <Stack sx={{margin: '30px 0 30px 0'}}>
          <WeeklyReportsLayout/>
        </Stack>

        <Stack sx={{margin: '30px 0 30px 0'}}>
          <Typography variant={'h6'} sx={{color: colors.primary, marginBottom: '16px'}}>Updating Monitoring</Typography>
          <UpdateMonitoringLayout/>
        </Stack>

      </Stack>

      {/*right group*/}
      <Stack alignItems={'flex-end'} gap={'40px'}>
        <Stack direction={'row'} sx={{alignItems: 'center', justifyContent: 'center', gap: '20px',color: colors.primary}}>
          <Settings />
          <NotificationsNoneOutlined />
          <Avatar variant={"square"} sx={{borderRadius: '6px'}}>B</Avatar>
        </Stack>
        <RoundedCard backgroundColor={colors.lightGray} maxWidth={'460px'}>
          <Stack alignItems={'center'} margin={'22px 0 16px 0'}>
            <Typography variant={'h6'} sx={{color: colors.primary, margin: '8px 0 6px 34px', alignSelf: 'flex-start'}}>Other Functions</Typography>
            <OtherFunctionsLayout/>
          </Stack>
          <Stack alignItems={'center'} margin={'4px 0 30px 0'}>
            <Typography variant={'h6'} sx={{color: colors.primary, margin: '8px 0 6px 34px', alignSelf: 'flex-start'}}>Statistics of Cleaning</Typography>
            <OtherFunctionsLayout/>
          </Stack>
        </RoundedCard>
      </Stack>

    </Stack>
  )
}