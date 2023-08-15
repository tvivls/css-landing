import {InputWrapperGrid, StyledInput} from "@/styles/Auth";
import {InputProps} from "@/types";

function Input({label, placeholder, value, type, onChange}: InputProps) {
  return (
    <InputWrapperGrid>
      <label>{label}</label>
      <StyledInput placeholder={placeholder} value={value as string} type={type} onChange={onChange}/>
    </InputWrapperGrid>
  );
}

export default Input;