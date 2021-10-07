import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    display: "flex !important",
    flexDirection: "column",
    minWidth: "20%",
    height: "30vh",
    border: "2px solid rgb(80, 80, 80, 0.3)",
    padding: "2%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
});

export default useStyles;
