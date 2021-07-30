import { makeStyles } from "@material-ui/styles";
import turtle from "../../images/turtle.JPG";

export const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${turtle})`,
    backgroundSize: "cover",
    textAlign: "center",
    color: "#F28F3B",
  },
  box: {
    backgroundColor: "rgba(255,255,255, .7)",
    marginBottom: "2rem",
    padding: ".5rem",
    borderRadius: ".5rem",
  },
});
