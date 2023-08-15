'use client'
import authImg from "../../../public/authImg.svg";
import Image from "next/image";
import {
  AuthWrapper,
  BorderButton, ButtonsWrapper, Form,
  FormWrapper, ImageStyled,
  ImgWrapper, Separator,
  StyledButton, StyledHeading,
} from "@/styles/Auth";
import Link from "next/link";
import googleImg from "../../../public/googleImg.svg";
import appleImg from "../../../public/appleImg.svg";
import PasswordInput from "@/components/PasswordInput";
import {useState} from "react";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";

function Authorization() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  return (
    <AuthWrapper>
      <FormWrapper>
        <StyledHeading>Вход</StyledHeading>
        <Form>
          <Input type="email" label="Email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <PasswordInput password={password} setPassword={setPassword}/>
          <Checkbox label="Запомнить меня" type="checkbox" value={checkbox} onChange={() => setCheckbox(prevState => !prevState)}>
            <Link href="">
              Забыли пароль?
            </Link>
          </Checkbox>

          <StyledButton type="submit">Вход</StyledButton>
        </Form>

        <ButtonsWrapper>
          <BorderButton type="button">
            <Image style={{ marginRight: "10px", width: "20px", height: "20px"}} src={googleImg} alt="log in with Google"/>
            Вход с помощью Google
          </BorderButton>
          <BorderButton type="button">
            <Image style={{width: "20px", height: "20px", marginRight: "10px"}} src={appleImg} alt="log in with Apple"/>
            Вход с помощью Apple
          </BorderButton>
        </ButtonsWrapper>

        <Separator/>

        <Link href={'/registration'} style={{color: "#001D6C", fontSize: "14px"}}>
          Нет аккаунта? Зарегистрироваться
        </Link>
      </FormWrapper>

      <ImgWrapper>
        <ImageStyled
          src={authImg}
          alt="Registration"
        />
      </ImgWrapper>
    </AuthWrapper>
  );
}

export default Authorization;