import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "70px",
  },
  image: {
    maxHeight: "50px",
    marginRight: "1rem",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  buttonBox: {
    width: "175px",
    display: "flex",
    justifyContent: "space-between",
  },
});
