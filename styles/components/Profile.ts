import { styled } from "styled-components";

export const ProfileBlock = styled.div`
  animation-name: fadeInDown;
  animation-duration: 0.5s;
  position: absolute;
  top: 50px;
  display: none;
  border-radius: 10px;
  background-color: #fff;
  width: 250px;
  height: 100px;
  padding: 10px;
  box-shadow: 0px 0px 5px black;
`;

export const ProfileBlockWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemProfile = styled.button`
  transition: 0.3s;
  width: 200px;
  height: 35px;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-start;
  border-radius: 5px;
  &:hover {
    transition: 0.3s;
    background-color: #e0e0e0;
  }
`;
