import { FormControlLabel } from "@material-ui/core";
import React from "react";
import GreenRadio from "../GreenRadio";

// const GreenCheckbox = withStyles({
//   root: {
//     color: "#43A047",
//     "&$checked": {
//       color: "#43A047",
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

function LocationFilterItem({ handleChange, location }) {
  // const [checked, setChecked] = useState(false);

  // function changeHandler(e) {
  //   handleChange(e.target.value, e.target.checked);
  //   setChecked((prev) => !prev);
  // }
  return (
    <FormControlLabel
      style={{}}
      control={<GreenRadio value={location} />}
      label={location}
    />
  );
}

export default LocationFilterItem;
