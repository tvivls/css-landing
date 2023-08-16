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
  display: none;
  animation-name: fadeInUp;
  animation-duration: 1s;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Search = styled(CommonSearch)`
  width: 701px;
  height: 32px;
`;

export const InputSearch = styled(CommonInputSearch)`
  width: 578px;
  height: 32px;
`;

export const CustomInput = styled(CommonCustomInput)`
  width: 336px;
  height: 30px;
`;

export const Categories = styled(CommonCategories)`
  width: 178px;
  height: 30px;
`;

export const SearchButton = styled(CommonSearchButton)`
  width: 99px;
  height: 32px;
`;

export const Bottom = styled(CommonBottom)`
  background-color: #fff;
`;
