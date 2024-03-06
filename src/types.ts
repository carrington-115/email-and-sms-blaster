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
