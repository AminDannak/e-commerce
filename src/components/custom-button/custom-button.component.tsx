import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./custom-button.styles.scss";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const CustomButton = ({ children, ...otherProps }: Props) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
