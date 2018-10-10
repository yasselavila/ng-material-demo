export interface FormField {
  label?: string;
  type?: string;
  required?: boolean;
}

export interface FormFields {
  [key: string]: FormField | string;
}
