import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerContainer: {
    backgroundColor: "rgb(80, 80, 80, 0.3)",
    display: "flex !important",
    height: "40vh",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: "1rem 1rem 2rem 1rem !important",
    color: "rgb(80, 80, 80, 0.5) !important",
    textAlign: "center",
    fontSize: "2vw !important",
  },
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
  weather: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "auto",
    marginTop: "-1.3rem",
    maxWidth: "80%",
  },
  dayStyles: {
    fontWeight: 900,
    marginBottom: "5%",
  },
  dateStyles: {
    marginBottom: "5%",
    fontSize: 20,
    color: "rgb(80, 80, 80, 0.5)"
  },
  avatarStyles: {
    width: 60,
    height: 60,
    margin: "auto",
    marginBottom: "5%",
  },
  temperatureStyles: {
    marginBottom: "5%"
  },
  captionStyles: {
    marginBottom: "2%",
  }
});
export { useStyles };
