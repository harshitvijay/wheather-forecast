import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";

export const DayStyledComponent = styled(Typography)({
  fontWeight: 900,
  marginBottom: "5%",
});

export const DateStyledComponent = styled(Typography)({
  marginBottom: "5%",
  fontSize: 20,
  color: "rgb(80, 80, 80, 0.5)",
});

export const AvatarStyledComponent = styled(Avatar)({
  width: 60,
  height: 60,
  margin: "auto",
  marginBottom: "5%",
});

export const TemperaturStyledComponent = styled(Typography)({
  marginBottom: "5%",
});

export const CaptionStyledComponent = styled(Typography)({
  marginBottom: "2%",
});
