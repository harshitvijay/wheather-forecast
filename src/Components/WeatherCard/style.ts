import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  weatherCard: {
    minWidth: 200,
    height: "35vh",
    marginRight: "2%",
    border: "2px solid rgb(80, 80, 80, 0.3)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  dayStyles: {
    fontWeight: 900,
    marginBottom: "5%",
  },
  dateStyles: {
    marginBottom: "5%",
    fontSize: 20,
    color: "rgb(80, 80, 80, 0.5)",
  },
  avatarStyles: {
    width: 60,
    height: 60,
    margin: "auto",
    marginBottom: "5%",
  },
  temperatureStyles: {
    marginBottom: "5%",
  },
  captionStyles: {
    marginBottom: "2%",
  },
});

export default useStyles;
