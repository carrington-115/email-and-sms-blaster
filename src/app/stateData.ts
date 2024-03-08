import { stateType } from "../types";

const appState: stateType = {
  user: {
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    country: "",
  },
  emails: ["contact@mark.me"],
  phoneNumbers: ["8018598701958"],
  message: "I am Mark",
};

export default appState;
