import SideMenu from "./components/SideMenu";
import {Container, useMediaQuery} from "@mui/material";

export const App = () => {
  const tabletSize = useMediaQuery('(min-width:900px)')
  const desktopSize = useMediaQuery('(min-width:1536px')

  return (<Container maxWidth={desktopSize?'xl':(tabletSize?'md': 'sm')}><SideMenu/></Container>)
}