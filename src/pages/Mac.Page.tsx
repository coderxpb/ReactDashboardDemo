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
  const tabletSize = useMediaQuery('(min-width: 900px)');

  const margins = tabletSize?{margin: '24px 0 24px 0'}:{margin: '14px 0 14px 0'}


  return (
    <Stack direction={desktopSize?'row':'column'} sx={{width: '100%', gap: `${desktopSize?'180px':'0px'}`}}>
      {/*left group*/}
      <Stack sx={desktopSize?{}:{width: '100%', marginBottom: '24px'}}>

        <Stack direction={tabletSize?'row':'column-reverse'} justifyContent={'space-between'} alignItems={tabletSize?'center':'flex-end'}>
          <RoundedCard backgroundColor={colors.orange} maxWidth={tabletSize?'560px':'100%'} backgroundImage={macbook} margin={tabletSize?'2px 2px 2px -2px': '14px 0 0 0'}>
            <Typography variant={"h4"} sx={{fontWeight: 600, color: 'white', margin: '34px 0 0 40px'}}>Hello, Barbara!</Typography>
            <Typography variant={"body1"} sx={{color: 'rgba(255,255,255,0.8)', margin: '0 0 34px 40px'}} >Welcome back to Clean My Mac</Typography>
          </RoundedCard>

          <Stack direction={'row'} sx={{display: `${desktopSize?'none': 'flex'}`,alignItems: 'center', justifyContent: 'center', gap: '24px',color: colors.primary}}>
            <Settings />
            <Badge anchorOrigin={{vertical: 'top', horizontal: 'right'}} color={"warning"} variant={'dot'}>
              <NotificationsNoneOutlined />
            </Badge>
            <Avatar src={avatar1} variant={"square"} sx={{borderRadius: '6px'}}>B</Avatar>
          </Stack>
        </Stack>

        <Stack sx={{...margins, marginTop:`${tabletSize?'48px':'24px'}`}}>
          <CalendarLayout />
        </Stack>

        <Stack sx={margins}>
          <WeeklyReportsLayout/>
        </Stack>

        <Stack sx={{margin: '24px 0 24px 0'}}>
          <Typography variant={'h6'} sx={{color: colors.primary, marginBottom: '16px'}}>Updating Monitoring</Typography>
          <UpdateMonitoringLayout/>
        </Stack>

      </Stack>

      {/*right group*/}
      <Stack alignItems={'flex-end'} gap={'48px'} margin={'0 0 80px 0'}>
        <Stack direction={'row'} sx={{display:`${desktopSize?'':'none'}`,alignItems: 'center', justifyContent: 'center', gap: '24px',color: colors.primary}}>
          <Settings />
          <Badge anchorOrigin={{vertical: 'top', horizontal: 'right'}} color={"warning"} variant={'dot'}>
            <NotificationsNoneOutlined />
          </Badge>
          <Avatar src={avatar1} variant={"square"} sx={{borderRadius: '6px'}}>B</Avatar>
        </Stack>

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