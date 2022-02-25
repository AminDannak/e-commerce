import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import "./form-input.styles.scss";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  type: "email" | "password" | "text" | "tel";
  handleChange: (str: string) => void;
}

const FormInput = ({ label, handleChange, ...otherProps }: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event.currentTarget.value);
  };

  const shrinkLabel = () => {
    const should =
      otherProps?.value && otherProps?.value?.toString()?.length > 0;
    console.log(should);
    return should;
  };

  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? (
        <label className={`${shrinkLabel() ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
