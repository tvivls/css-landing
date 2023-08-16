import { styled } from "styled-components";
import {
  CommonBottom,
  CommonCategories,
  CommonCustomInput,
  CommonInputSearch,
  CommonSearch,
  CommonSearchButton,
} from "./CommonMenu";

export const Container = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

export const Search = styled(CommonSearch)`
  width: 1076.88px;
  height: 48px;
`;

export const InputSearch = styled(CommonInputSearch)`
  width: 948.88px;
  height: 48px;
`;

export const CustomInput = styled(CommonCustomInput)`
  width: 716.88px;
  height: 46px;
`;

export const Categories = styled(CommonCategories)`
  width: 178px;
  height: 46px;
`;

export const SearchButton = styled(CommonSearchButton)`
  width: 105px;
  height: 48px;
`;

export const Center = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
`;

export const CenterWrapper = styled.div`
  width: 1440px;
  padding: 24px 80px 24px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Bottom = styled(CommonBottom)`
  background-color: #f2f4f8;
`;
