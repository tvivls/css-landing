import {InputWrapperGrid, StyledIcon} from "@/styles/Auth";
import {SetStateAction, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Input from "@/components/Input";

interface Props {
  password: string;
  setPassword: (value: SetStateAction<string>) => void;
}

function PasswordInput({password, setPassword}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <InputWrapperGrid>
      <Input
        label="Пароль"
        placeholder="******"
        value={password}
        type={visible ? 'text' : 'password'}
        onChange={(e) => setPassword(e.target.value)}/>
      <StyledIcon onClick={() => setVisible(prevState => !prevState)}>
        <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
      </StyledIcon>
    </InputWrapperGrid>
  );
}

export default PasswordInput;