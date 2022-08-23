import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { multiStepContext } from "../StepContext";

const FirstStep = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <>
      <div>
        <div>
          <TextField
            label="first name"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["firstname"]}
            onChange={(e) =>
              setUserData({ ...userData, firstname: e.target.value })
            }
          />
        </div>
        <div>
          <TextField
            label="Last name"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["lastname"]}
            onChange={(e) =>
              setUserData({ ...userData, lastname: e.target.value })
            }
          />
        </div>

        <div>
          <TextField
            label="Contact number"
            margin="normal"
            variant="outlined"
            color="secondary"
            value={userData["contact"]}
            onChange={(e) =>
              setUserData({ ...userData, contact: e.target.value })
            }
          />
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentStep(2)}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
