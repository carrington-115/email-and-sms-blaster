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
