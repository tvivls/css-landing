import {CheckboxWrapper, InputWrapperFlex} from '@/styledComponents/Auth';
import {InputProps} from '@/types';

function Checkbox({label, type, children, checkboxValue, onChange}: InputProps) {
  return (
    <CheckboxWrapper>
      <InputWrapperFlex>
        <input type={type} checked={checkboxValue} onChange={onChange}/>
        <label>{label}</label>
      </InputWrapperFlex>
      {children}
    </CheckboxWrapper>
  );
}

export default Checkbox;
