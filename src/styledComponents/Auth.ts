import styled from 'styled-components';
import Image from 'next/image';

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  color: #21272A;
  width: 100%;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  flex: 0 0 50%;
  height: 100vh;

  @media (max-width: 1024px) {
    order: 1;
    flex: 0 0 100%;
    height: 50vh;
    width: 100%;
  }
`;

export const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (min-width: 1025px) {
    height: 100vh;
    object-fit: cover;
  }
`;

export const FormWrapper = styled.div`
  display: grid;
  flex-basis: 50%;
  padding: 80px;
  gap: 48px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-basis: 100%;
    padding: 32px 16px;
    gap: 24px;
    order: 2;
  }
`;

export const StyledHeading = styled.h2`
  width: 100%;
  gap: 8px;
  font-weight: 700;
  font-size: 42px;
`;

export const Form = styled.form`
  width: 100%; 
  font-size: 14px;
  gap: 16px;
  display: grid;
`;

export const InputWrapperGrid = styled.div`
  display: grid;
  gap: 4px;
  width: 100%;
  position: relative;
  align-items: center;
`;

export const InputWrapperFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledInput = styled.input`
  padding: 15px 16px;
  width: 100%;
  background: #F2F4F8;
  color: black;
  border: 0;
  box-shadow: 0 1px #C1C7CD;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #3385fd;
  border: 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #ffffff;

  &:hover {
    background: #1267ec;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const BorderButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #ffffff;
  color: #458FF6;
  border: 2px solid #458FF6;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #1163e3;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Separator = styled.hr`
  color: #DDE1E6;
`;

export const StyledIcon = styled.span`
  position: absolute;
  top: 65%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #777;
`;
