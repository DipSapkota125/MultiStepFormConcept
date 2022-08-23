import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { multiStepContext } from "../StepContext";

const ThirdStep = () => {
  const { setCurrentStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

  return (
    <>
      <div>
        <div>
          <TextField
            label="City"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["city"]}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          />
        </div>
        <div>
          <TextField
            label="Landmark"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["landmark"]}
            onChange={(e) =>
              setUserData({ ...userData, landmark: e.target.value })
            }
          />
        </div>

        <div>
          <TextField
            label="Postal code"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["postcode"]}
            onChange={(e) =>
              setUserData({ ...userData, postcode: e.target.value })
            }
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCurrentStep(2)}
          >
            Back
          </Button>
          <Button
            style={{ marginLeft: "2px" }}
            variant="contained"
            onClick={submitData}
            color="primary"
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
