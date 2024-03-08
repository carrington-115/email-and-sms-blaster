import { ReactNode } from "react";

interface skeletonType {
  type: string;
}

export interface inputType {
  inputType: string;
  inputPlaceholder: string;
}

export interface formType {
  formTitle: string;
  formData: inputType[];
  formSubmitAction: () => void;
}

export interface signInButtonType {
  icon: ReactNode;
  text: string;
}

export type userType = {
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  country: string;
};

export interface stateType {
  user: userType;
  emails: string[];
  phoneNumbers: string[];
  message: string;
}
