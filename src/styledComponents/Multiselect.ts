import styled from 'styled-components';
import {ImageStyled} from '@/styledComponents/Auth';

export const RotatableImage = styled(ImageStyled)<{ rotated: boolean }>`
  transform: ${props => (props.rotated ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  height: 48px;
  color: #697077;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 12px 16px;
  width: 100%;
  background: #F2F4F8;
  border: 0;
  box-shadow: 0 1px #C1C7CD;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #ffffff;
  list-style: none;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
`;

export const DropdownMenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

export const TreeIndent = styled.div<{ level: number }>`
  margin-bottom: 5px;
  margin-top: 5px;
  color: #000000DE;
  margin-left: ${(props) => props.level * 20}px;
`;
