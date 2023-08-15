import {CheckboxWrapper, InputWrapperFlex} from "@/styles/Auth";
import {InputProps} from "@/types";

function Checkbox({label, type, children, value, onChange}: InputProps) {
  return (
    <CheckboxWrapper>
      <InputWrapperFlex>
        <input type={type} checked={value as boolean} onChange={onChange}/>
        <label>{label}</label>
      </InputWrapperFlex>
      {children}
    </CheckboxWrapper>
  );
}

export default Checkbox;