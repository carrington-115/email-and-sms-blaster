import { createContext } from "react";
import appState from "./stateData";

const appContext = createContext(appState);

export default appContext;
