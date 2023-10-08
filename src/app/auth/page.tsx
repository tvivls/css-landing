'use client';
import Image from 'next/image';
import {
  AuthWrapper,
  BorderButton, ButtonsWrapper, Form,
  FormWrapper, ImageStyled,
  ImgWrapper, Separator,
  StyledButton, StyledHeading,
} from '@/styledComponents/Auth';
import Link from 'next/link';
import PasswordInput from '@/components/PasswordInput';
import {FormEvent, useState} from 'react';
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import {appleSVG, authSVG, googleSVG} from '../../../public/Images';
import {useRouter} from 'next/navigation';

function Authorization() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <AuthWrapper>
      <FormWrapper>
        <StyledHeading>Вход</StyledHeading>
        <Form onSubmit={handleSubmit}>
          <Input type="email" label="Email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <PasswordInput password={password} setPassword={setPassword}/>
          <Checkbox label="Запомнить меня" type="checkbox" checkboxValue={checkbox} onChange={() => setCheckbox(prevState => !prevState)}>
            <Link href="/auth">
              Забыли пароль?
            </Link>
          </Checkbox>

          <StyledButton type="submit" onClick={() => router.push('/main')}>Вход</StyledButton>
        </Form>

        <ButtonsWrapper>
          <BorderButton type="button">
            <Image style={{ marginRight: '10px', width: '20px', height: '20px'}} src={googleSVG} alt="log in with Google"/>
            Вход с помощью Google
          </BorderButton>
          <BorderButton type="button">
            <Image style={{width: '20px', height: '20px', marginRight: '10px'}} src={appleSVG} alt="log in with Apple"/>
            Вход с помощью Apple
          </BorderButton>
        </ButtonsWrapper>

        <Separator/>

        <Link href="/registration" style={{color: '#001D6C', fontSize: '14px'}}>
          Нет аккаунта? Зарегистрироваться
        </Link>
      </FormWrapper>

      <ImgWrapper>
        <ImageStyled
          src={authSVG}
          alt="Authorization"
        />
      </ImgWrapper>
    </AuthWrapper>
  );
}

export default Authorization;
