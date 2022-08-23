import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { multiStepContext } from "../StepContext";

const SecondStep = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);

  return (
    <>
      <div>
        <div>
          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["email"]}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div>
          <TextField
            label="Country"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["country"]}
            onChange={(e) =>
              setUserData({ ...userData, country: e.target.value })
            }
          />
        </div>

        <div>
          <TextField
            label="District"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["district"]}
            onChange={(e) =>
              setUserData({ ...userData, district: e.target.value })
            }
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCurrentStep(1)}
          >
            Back
          </Button>
          <span> </span>

          <Button
            style={{ marginLeft: "2px" }}
            variant="contained"
            color="primary"
            onClick={() => setCurrentStep(3)}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default SecondStep;
