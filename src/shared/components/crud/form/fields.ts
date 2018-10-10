export interface FormField {
  title?: string;
  type?: string;
}

export interface FormFields {
  [key: string]: FormField | string;
}
