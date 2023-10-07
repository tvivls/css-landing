'use client';
import {
  AuthWrapper, BorderButton, ButtonsWrapper,
  Form,
  FormWrapper, ImageStyled, ImgWrapper, InputsWrapper,
  InputWrapperGrid, Separator, StyledButton,
  StyledHeading,
} from '@/styledComponents/Auth';
import Link from 'next/link';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import {FormEvent, useState} from 'react';
import Input from '@/components/Input';
import Checkbox from '@/components/Checkbox';
import {appleSVG, authSVG, googleSVG} from '../../../public/Images';
import {emailRegex, passwordRegex} from '@/utils/consts';
import {useRouter} from 'next/navigation';

export interface FormErrors {
  email?: string;
  password?: string;
  checkbox?: string;
}

function Registration() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleClear() {
    setErrors({});
    setCheckbox(false);
    setName('');
    setEmail('');
    setSurname('');
    setPassword('');
  };

  function handleSubmit (e: FormEvent) {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!emailRegex.test(email))
      newErrors.email = 'Введите корректный email';
    if (password.length < 8 || !passwordRegex.test(password))
      newErrors.password = 'Пароль должен содержать не менее 8 символов, строчные и прописные символы';
    if (!checkbox)
      newErrors.checkbox = 'Примите соглашение об обработке персональных данных';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) handleClear();
  };

  const fontColor = errors.password ? 'red' : '#697077';

  return (
    <AuthWrapper>
      <FormWrapper>
        <StyledHeading>Регистрация</StyledHeading>
        <Form onSubmit={handleSubmit}>
          <InputsWrapper>
            <Input type="text" label="Имя" placeholder="Иван" value={name} onChange={(e) => setName(e.target.value)}/>
            <Input type="text" label="Фамилия" placeholder="Иванов" value={surname} onChange={(e) => setSurname(e.target.value)}/>
          </InputsWrapper>
          <Input type="email" label="Email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          <InputWrapperGrid>
            <PasswordInput password={password} setPassword={setPassword}/>
            <label
              style={{fontWeight: '400', fontSize: '12px', color: fontColor }}>
              Пароль должен содержать минимум 8 символов, строчные и прописные символы
            </label>
          </InputWrapperGrid>

          <Checkbox label="Согласен с политикой обработки персональных данных" type="checkbox" checkboxValue={checkbox} onChange={() => setCheckbox(prevState => !prevState)}/>
          {errors.checkbox && <p style={{ color: 'red' }}>{errors.checkbox}</p>}

          <StyledButton type="submit" onClick={() => router.push('/auth')}>Зарегистрироваться</StyledButton>
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

        <Separator />

        <Link href="/auth" style={{color: '#001D6C', fontSize: '14px'}}>
          Уже есть аккаунт?
        </Link>
      </FormWrapper>

      <ImgWrapper>
        <ImageStyled
          src={authSVG}
          alt="Registration"
        />
      </ImgWrapper>
    </AuthWrapper>
  );
}
export default Registration;
