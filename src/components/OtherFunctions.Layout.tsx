import { Stack } from "@mui/material";
import { colors } from "../colors";
import {CheckCircleOutline, EqualizerRounded, Sensors, SyncOutlined} from "@mui/icons-material";
import { OtherFunctionsCard } from "./OtherFunctions.Card";

export const OtherFunctionsLayout = () => {
  const iconStyling = {
    color: "white",
    backgroundColor: "rgba(255,255,255,0.3)",
    marginTop: "3px",
    padding: "4px",
    borderRadius: "9px",
    marginLeft: "6px",
  };

  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", width: "460px", alignItems: 'center', gap: '30px', justifyContent: 'center' }}>
      <OtherFunctionsCard
        icon={<EqualizerRounded sx={iconStyling} />}
        title={"Optimization"}
        color={colors.red}
      />

      <OtherFunctionsCard
        icon={<Sensors sx={iconStyling} />}
        title={"Smart Scan"}
        color={colors.orange}
      />

      <OtherFunctionsCard
        icon={<CheckCircleOutline sx={iconStyling} />}
        title={"Malware"}
        color={colors.blue}
      />

      <OtherFunctionsCard
        icon={<SyncOutlined sx={iconStyling} />}
        title={"Updater"}
        color={colors.primary}
      />
    </Stack>
  );
};
