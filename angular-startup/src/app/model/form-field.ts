export interface OptionField {
  type: string;
  label: string;
}

export interface FormField {
  label: string;
  value: string;
  active: boolean;
  enabled: boolean;
  type: string;
  options: OptionField[];
  multiple: boolean;
  textarea: string;
  select: OptionField[];
}
