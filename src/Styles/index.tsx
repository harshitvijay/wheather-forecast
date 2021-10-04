import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  headerContainer: {
    backgroundColor: "rgb(80, 80, 80, 0.3)",
    display: "flex",
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
});
export { useStyles };
