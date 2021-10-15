import { Button } from "@material-ui/core";
import "./Navbar.css";
import { Typography } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const Navbar = (props) => {
  const resetArray = props.resetArray;
  return (
    <div className="navbar">
      <div className="logo">
        <SortIcon fontsize="large" style={{ color: "white" }} />
        <Typography variant="h4" style={{ color: "white" }}>
          SortViz
        </Typography>
      </div>
      <div className="reset-array">
        <Button variant="contained" color="primary" onClick={resetArray}>
          <Typography>Generate New Array</Typography>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
