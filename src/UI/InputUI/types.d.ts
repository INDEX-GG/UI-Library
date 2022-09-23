import { InputHTMLAttributes } from "react";
import { StyledComponent } from "styled-components";
import { ThemeType } from "@/types/types";

export interface IInputUIProps {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  styledComponents?: {
    Input?: StyledComponent<"input", ThemeType>;
  };
}
