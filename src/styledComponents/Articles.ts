import styled, {keyframes} from 'styled-components';
import {ImageStyled} from '@/styledComponents/Auth';
import Image from 'next/image';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  gap: 48px;
  padding: 80px;
`;

export const StyledDiv = styled.div`
  display: grid;
  justify-content: center;
  gap: 8px;
`;

export const StyledPicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1280px) {
    display: grid;
    justify-content: center;
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;

export const StyledCaption = styled.caption`
  color: #001D6C;
  font-weight: 700;
  line-height: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
`;

export const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 42px;
  line-height: 46px;
  color: #21272A;
`;

export const StyledImg = styled(ImageStyled)`
  width: 100%;
  height: auto;
`;

export const CardContent = styled.div`
  display: grid;
  gap: 16px;
  padding: 24px 16px;
  max-width: 308px;
`;

export const Card = styled.div`
  border: 1px solid #DDE1E6;
  border-radius: 8px;
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`;

export const DetailButton = styled.button`
  width: 156px;
  height: 48px;
  align-items: center;
  display: flex;
  padding: 16px 8px 16px 0;
  background: #ffffff;
  color: #458FF6;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.5px;
  border: 0;
  gap: 16px;

  @media(max-width: 1024px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const StyledDetailImg = styled(Image)`
  width: 24px;
  height: 24px;
`;

export const AnimationDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Background = styled(ImageStyled)`
  width: 100%;
  height: auto;
  z-index: 1;
  top: 0;
  left: 0;
  position: relative;
`;

export const Frame = styled.div`
  border: 5px solid #458FF6;
  height: 37px;
  width: 56px;
  position: relative;
  z-index: 2;
`;

export const moveAlongFrame = keyframes`
  0% {
    transform: translateX(-3px) translateY(-32px);
  }
  25% {
    transform: translateX(47px) translateY(-32px);
  }
  50% {
    transform: translateX(47px) translateY(0);
  }
  75% {
    transform: translateX(-3px) translateY(0);
  }
  100% {
    transform: translateX(-3px) translateY(-32px);
  }
`;

export const WhiteDot = styled.div`
  width: 2px;
  height: 2px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 0 20px 25px rgba(255, 255, 255, 1);
  -webkit-box-shadow: 0 0 20px 25px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0 0 20px 25px rgba(255, 255, 255, 1);
  animation: ${moveAlongFrame} 10s linear infinite;
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
