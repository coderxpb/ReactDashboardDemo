import SideMenu from "./components/SideMenu";
import { Container, ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from "./themes/theme";

export const App = () => {
  const tabletSize = useMediaQuery("(min-width:900px)");
  const desktopSize = useMediaQuery("(min-width:1536px");

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={desktopSize ? "xl" : tabletSize ? "md" : "sm"}>
        <SideMenu />
      </Container>
    </ThemeProvider>
  );
};
