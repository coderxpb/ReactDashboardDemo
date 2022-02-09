import {Avatar, Badge, Stack, Typography, useMediaQuery} from "@mui/material";
import {RoundedCard} from "../components/RoundedCard";
import {colors} from "../colors";
import {WeeklyReportsLayout} from "../components/WeeklyReports.Layout";
import {UpdateMonitoringLayout} from "../components/UpdateMonitoring.Layout";
import {NotificationsNoneOutlined, Settings} from "@mui/icons-material";
import {OtherFunctionsLayout} from "../components/OtherFunctions.Layout";
import macbook from "../images/macbook.png";
import {CalendarLayout} from "../components/Calendar.Layout";
import avatar1 from "../images/avatar.jpg";

export const MacPage = () => {
  const desktopSize = useMediaQuery('(min-width: 1536px)');

  return (
    <Stack direction={desktopSize?'row':'column-reverse'} sx={{width: '100%', gap: '180px'}}>
      {/*left group*/}
      <Stack sx={desktopSize?{}:{width: '100%', marginBottom: '100px'}}>

        <RoundedCard display={desktopSize?'block':'none'} backgroundColor={colors.orange} maxWidth={'560px'} backgroundImage={macbook} margin={'2px 2px 2px -2px'}>
          <Typography variant={"h4"} sx={{fontWeight: 600, color: 'white', margin: '34px 0 0 40px'}}>Hello, Barbara!</Typography>
          <Typography variant={"body1"} sx={{color: 'rgba(255,255,255,0.8)', margin: '0 0 34px 40px'}} >Welcome back to Clean My Mac</Typography>
        </RoundedCard>

        <CalendarLayout />

        <Stack sx={{margin: '24px 0 24px 0'}}>
          <WeeklyReportsLayout/>
        </Stack>

        <Stack sx={{margin: '24px 0 24px 0'}}>
          <Typography variant={'h6'} sx={{color: colors.primary, marginBottom: '16px'}}>Updating Monitoring</Typography>
          <UpdateMonitoringLayout/>
        </Stack>

      </Stack>

      {/*right group*/}
      <Stack alignItems={'flex-end'} gap={'48px'}>
        <Stack direction={'row'} sx={{alignItems: 'center', justifyContent: 'center', gap: '24px',color: colors.primary}}>
          <Settings />
          <Badge anchorOrigin={{vertical: 'top', horizontal: 'right'}} color={"warning"} variant={'dot'}>
            <NotificationsNoneOutlined />
          </Badge>
          <Avatar src={avatar1} variant={"square"} sx={{borderRadius: '6px'}}>B</Avatar>
        </Stack>

        <RoundedCard display={desktopSize?'none':'block'} backgroundColor={colors.orange} maxWidth={'100%'} backgroundImage={macbook} margin={'2px 2px 2px -2px'}>
          <Typography variant={"h4"} sx={{fontWeight: 600, color: 'white', margin: '34px 0 0 40px'}}>Hello, Barbara!</Typography>
          <Typography variant={"body1"} sx={{color: 'rgba(255,255,255,0.8)', margin: '0 0 34px 40px'}} >Welcome back to Clean My Mac</Typography>
        </RoundedCard>

        <RoundedCard backgroundColor={colors.lightGray} maxWidth={desktopSize?'460px':'100%'}>
          <Stack alignItems={'center'} margin={'24px 0 16px 0'}>
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