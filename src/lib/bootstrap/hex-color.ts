import { Color } from "react-bootstrap/esm/types";

export type Total<T> = { [key in Color]: T };

const BOOTSRAP_COLORS: Total<string> = {
  danger: "#d9534f",
  dark: "#212529",
  info: "#0dcaf0",
  muted: "#6c757d",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
  white: "#fff",
  light: "#f8f9fa",
};

export const hexColor = (color: Color) => BOOTSRAP_COLORS[color];
