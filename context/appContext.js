import { createContext } from "react";

const initialAppState = {
  weather: null,
  city: "",
};

function appReducer(state, action) {
  let loadedState = false;
  const { type, payload } = action;

  switch (type) {
    case "WEATHER":
      return { ...state, weather: [payload], isLoaded: loadedState };
    case "CITY":
      return { ...state, city: payload };
    default:
      return state;
  }
}

const AppContext = createContext();

export { appReducer, initialAppState };
export default AppContext;
