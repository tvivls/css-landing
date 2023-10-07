import styled from 'styled-components';
import Checkbox from '@/components/Checkbox';

export const Container = styled.div`
  display: flex;
  background: #ffffff;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  align-items: center;

  @media(max-width: 1024px) {
    height: 25vh;
  }`;

export const ImgWrapper = styled.div`
  position: relative;
  flex: auto;
  height: 100vh;
  overflow: hidden;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh
`;

export const FormWrapper = styled.div`
  position: absolute;
  display: grid;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  
  @media(max-width: 1024px) {
    margin: 25px 0;
  }
`;

export const Form = styled.form`
  height: 70vh;
  width: 45vw;
  margin: 50px auto;
  font-size: 14px;
  display: grid;
  background: #ffffff;
  border: 1px solid #DDE1E6;
  padding: 48px;
  gap: 16px;
  align-items: center;
  border-radius: 8px;

  @media(max-width: 1024px) {
    padding: 24px 16px;
    height: 110%;
    width: 100%;
  }
`;

export const StyledTextarea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 12px 16px;
  width: 100%;
  background: #F2F4F8;
  color: #000000;
  border: 0;
  box-shadow: 0 1px #C1C7CD;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;

export const StyledButton = styled.button`
  padding: 15px 25px;
  background: #458FF6;
  border: 0;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
  margin-left: auto;

  &:hover {
    background: #1267ec;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  align-items: center;
`;
