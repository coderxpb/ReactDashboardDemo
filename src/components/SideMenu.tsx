import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {colors} from "../colors";
import {
  Air,
  DesktopMacOutlined,
  FolderOutlined,
  LockOutlined,
  LogoutOutlined, MailOutlined, SettingsInputComponent,
} from "@mui/icons-material";
import {MacPage} from "../pages/Mac.Page";
import {useMediaQuery} from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      style={{width: '100%'}}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: '100%' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function SideMenu() {
  const [value, setValue] = React.useState(1);
  const desktopSize = useMediaQuery('(min-width: 1536px)');
  const tabletSize = useMediaQuery('(min-width:900px)');


  const borderStyle = desktopSize?{textTransform: 'none', backgroundColor: 'white', borderRadius: '25px 0 0 25px'}:
    {textTransform: 'none', backgroundColor: 'white', borderRadius: '0 0 0 0'};

  const iconStyle = desktopSize?{color: colors.primary, marginTop: '2px',marginBottom: '2px', marginLeft: '-30px'}:
    {color: colors.primary, margin:'0'};

  const menuContainerStyle = desktopSize? {
      zIndex: '10',
      backgroundColor: colors.primary,
      display: 'flex', flexDirection: 'column',
      borderRadius: '25px',
      margin: '10px 16px 10px 10px',
      maxWidth: '120px',
      justifyContent:'space-around'}:
      {position: 'fixed', bottom: '0',
        maxWidth: '620px',
        left: 0,
        right: 0,
        margin: '10px auto',
      flexDirection: 'row', zIndex: '10',
        backgroundColor: colors.primary,
        borderRadius: '25px',
        alignItems: 'flex-start',
      justifyContent:'center'};

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh', backgroundColor: 'white', }}
    >
      <Box sx={menuContainerStyle}>
        <Box sx={{alignSelf: `${desktopSize?'center': 'flex-start'}`, display:`${desktopSize?'': 'none'}`, color: 'white', fontSize: `${desktopSize?'20px': '0px'}`}}>Cl<strong>Mac</strong></Box>
        <Tabs
          orientation={desktopSize?"vertical":"horizontal"}
          variant="scrollable"
          TabIndicatorProps={{style: {backgroundColor: 'transparent'}}}
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={desktopSize?{ borderRight: 0, marginLeft: '30px' }:{marginLeft: '30px'}}
        >
          <Tab disableRipple icon={<Air sx={(value==0)?iconStyle:{...iconStyle, color: 'white'}}/>} {...a11yProps(0)} sx={(value==0)?borderStyle:{}}/>
          <Tab disableRipple icon={<DesktopMacOutlined sx={(value==1)?iconStyle:{...iconStyle, color: 'white'}}/>} {...a11yProps(1)} sx={(value==1)?borderStyle:{}}/>
          <Tab disableRipple icon={<FolderOutlined sx={(value==2)?iconStyle:{...iconStyle, color: 'white'}}/>} {...a11yProps(2)} sx={(value==2)?borderStyle:{}}/>
          <Tab disableRipple icon={<SettingsInputComponent sx={(value==3)?iconStyle:{...iconStyle, color: 'white'}}/>} {...a11yProps(3)} sx={(value==3)?borderStyle:{}}/>
          <Tab disableRipple icon={<LockOutlined sx={(value==4)?iconStyle:{...iconStyle, color: 'white'}}/>} {...a11yProps(4)} sx={(value==4)?borderStyle:{}}/>
          <Tab disableRipple icon={<MailOutlined sx={(value==5)?iconStyle:{...iconStyle, color: 'white'}}/>} {...a11yProps(5)} sx={(value==5)?borderStyle:{}}/>
        </Tabs>
        <Box sx={desktopSize?{alignSelf: 'center'}:{display:'none'}}><LogoutOutlined sx={{color: colors.darkGray}}/></Box>
      </Box>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MacPage/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}