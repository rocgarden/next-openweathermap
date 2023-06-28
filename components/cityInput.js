import Box from "@mui/material/Box";
import AppContext from "@/context/appContext";
import { useContext,  } from "react";
import { TextField, Typography } from "@mui/material";

export function CityInput() {
  const { dispatchApp } = useContext(AppContext);

    return (
      <Box sx={{ p: 3, mt: 25, alignItems:"center", justifyContent:"center" }}>
        <Typography sx={{color: "#fff", fontWeight:"bold", fontSize:25}} >Search weather for another city: </Typography>
        <TextField
          margin="normal"
          required fullWidth
          id="city"
          label="Enter City"
          name="city"
          onChange={ 
            (e) => {
            const value = e.target.value;
              dispatchApp({ type: "CITY", payload: value });
          }
          }
        />
      </Box>
    );
}
