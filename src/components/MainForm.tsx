import {
  Container,
  Form,
  FormWrapper,
  ImgWrapper,
  StyledButton,
  StyledCheckbox,
  StyledTextarea,
  Wrapper,
} from '@/styledComponents/MainForm';
import {ImageStyled, InputsWrapper, InputWrapperGrid} from '@/styledComponents/Auth';
import Input from '@/components/Input';
import Dropdown from '@/components/Multiselect';
import {StyledH2} from '@/styledComponents/Articles';
import {firstAidKitSVG} from '../../public/Images';
import {options} from '@/utils/consts';

function MainForm() {
  const handleSelect = (selectedValues: string[]) => {
    console.info('Selected values:', selectedValues);
  };
  return (
    <Wrapper>
      <Container>
        <ImgWrapper>
          <ImageStyled src={firstAidKitSVG} alt="Начать сотрудничество"/>
        </ImgWrapper>
        <FormWrapper>
          <Form>
            <StyledH2>Начать использование</StyledH2>
            <p style={{fontWeight: '400', fontSize: '18px', lineHeight: '25px', color: '#21272A'}}>Хотите начать сотрудничество? Напишите нам</p>
            <InputsWrapper>
              <Input type="text" label="Имя" placeholder="Иван"/>
              <Input type="text" label="Фамилия" placeholder="Иванов"/>
            </InputsWrapper>
            <Input type="text" label="Тема" placeholder="Сотрудничество"/>
            <InputWrapperGrid>
              <label>Вопрос</label>
              <StyledTextarea placeholder="Ваш вопрос..."/>
            </InputWrapperGrid>
            <InputWrapperGrid>
              <label>Группы</label>
              <Dropdown options={options} onSelect={handleSelect}/>
            </InputWrapperGrid>
            <StyledCheckbox label="Согласен с политикой обработки персональных данных" type="checkbox"/>
            <StyledButton type="submit">Отправить</StyledButton>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default MainForm;
