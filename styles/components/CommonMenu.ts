import { styled } from "styled-components";

export const Container = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

export const Top = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dde1e6;
`;

export const TopWrapper = styled.div`
  width: 1440px;
  padding: 8px 80px 8px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Location = styled.div`
  width: 106px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 600;
`;

export const CommonSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
`;

export const CommonInputSearch = styled.div`
  display: flex;
  top: 16px;
  left: 264px;
  border: 1px solid #c1c7cd;
  background-color: #f2f4f8;
`;

export const SearchIcon = styled.div`
  margin: 0px 10px 0px 20px;
  display: flex;
  align-items: center;
`;

export const CommonCustomInput = styled.input`
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const CommonCategories = styled.select`
  background-color: #f2f4f8;
  border-left: 1px solid #c1c7cd;
  color: #697077;
  &:focus {
    outline: none;
  }
`;

export const CommonSearchButton = styled.button`
  top: 16px;
  left: 866px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px;
  color: #ffffff;
  background-color: #458ff6;
`;

export const TRFLBar = styled.div`
  width: 317px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  position: relative;
`;

export const ItemTRFLBar = styled.div`
  width: 149px;
  height: 48px;
  padding: 12px 8px 12px 8px;
  display: flex;
  justify-content: space-between;
  &:hover{
    cursor: pointer;
  }
`;

export const CommonBottom = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
`;

export const BottomWrapper = styled.div`
  width: 1440px;
  padding: 8px 80px 8px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.div`
  height: 32px;
  display: flex;
`;

export const ItemNavBar = styled.div`
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 16px;
  font-size: 16px;
  font-weight: 600;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const FirstItemNavBar = styled(ItemNavBar)`
  border: 1px solid #c1c7cd;
  background-color: #ffffff;
`;
