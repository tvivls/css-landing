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

const options = [
  {
    value: 'group1',
    label: 'Группа 1',
    children: [
      { value: 'child1.1', label: 'Группа 1.1' },
      { value: 'child1.2', label: 'Группа 1.2' },
      {
        value: 'child1.3',
        label: 'Группа 1.3',
        children: [
          { value: 'child1.3.1', label: 'Группа 1.3.1' },
          { value: 'child1.3.2', label: 'Группа 1.3.2' },
          { value: 'child1.3.3', label: 'Группа 1.3.3' },
        ],
      },
      {
        value: 'child1.4',
        label: 'Группа 1.4',
        children: [
          { value: 'child1.4.1', label: 'Группа 1.4.1' },
          { value: 'child1.4.2', label: 'Группа 1.4.2' },
          { value: 'child1.4.3', label: 'Группа 1.4.3' },
        ],
      },
      {
        value: 'child1.5',
        label: 'Группа 1.5',
        children: [
          { value: 'child1.5.1', label: 'Группа 1.5.1' },
          { value: 'child1.5.2', label: 'Группа 1.5.2' },
          { value: 'child1.5.3', label: 'Группа 1.5.3' },
        ],
      },
      { value: 'child1.6', label: 'Группа 1.6' },
      { value: 'child1.7', label: 'Группа 1.7' },
    ],
  },

  {
    value: 'group2',
    label: 'Группа 2',
    children: [
      {
        value: 'child2.1',
        label: 'Группа 2.1',
        children: [
          { value: 'child2.1.1', label: 'Группа 2.1.1' },
          { value: 'child2.1.2', label: 'Группа 2.1.2' },
          { value: 'child2.1.3', label: 'Группа 2.1.3' },
        ],
      },
      {
        value: 'child2.2',
        label: 'Группа 2.2',
        children: [
          { value: 'child2.2.1', label: 'Группа 2.2.1' },
          { value: 'child2.2.2', label: 'Группа 2.2.2' },
          { value: 'child2.2.3', label: 'Группа 2.2.3' },
        ],
      },
      { value: 'child2.3', label: 'Группа 2.3' },
    ],
  },
];

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
            <StyledH2>Начать использования</StyledH2>
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
