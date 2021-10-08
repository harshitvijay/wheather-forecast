import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardWrapper: {
    display: "flex !important",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "5%",
  },
  table: {
    minWidth: 500,
    backgroundColor: "rgb(80, 80, 80, 0.3)",
  },
  tableHeader: {
    backgroundColor: "black",
  },
  tableHeaderRowCell: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default useStyles;
