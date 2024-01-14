import React from "react";

import { ButtonContainer } from "./button.style";

export type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (ev: any) => void;
  type?: ButtonType;
};

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} type={type}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
