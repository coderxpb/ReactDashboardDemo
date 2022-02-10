import {createTheme} from "@mui/material";
import {colors} from "./colors";


export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        main: string,
      }
    };
  }
}