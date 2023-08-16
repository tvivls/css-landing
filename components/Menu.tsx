"use client";

import {
  ChevronDownSVG,
  LocationSVG,
  LogoSVG,
  MenuSVG,
  SeacrhSVG,
  ShoppingCartSVG,
  UserSVG,
} from "@/assets/svg/IconsSVG";
import {
  Categories,
  Container,
  CustomInput,
  InputSearch,
  Search,
  SearchButton,
  Center,
  Bottom,
  CenterWrapper,
} from "@/styles/components/Menu";

import {
  TRFLBar,
  ItemTRFLBar,
  NavBar,
  ItemNavBar,
  Top,
  Location,
  SearchIcon,
  FirstItemNavBar,
  TopWrapper,
  BottomWrapper,
} from "@/styles/components/CommonMenu";

import { listCategories, listMenu } from "@/constants/Menu";
import Image from "next/image";
import { Profile } from "./Profile";

export const Menu = () => {
  const changeVisProfileBlock = () => {
    const profileBlock = document.getElementById("profile");
    if (profileBlock) {
      profileBlock.style.display =
        profileBlock.style.display === "none" ? "block" : "none";
    }
  };

  return (
    <Container>
      <Top>
        <TopWrapper>
          <Location>
            <LocationSVG />
            <span>Москва</span>
          </Location>
          <TRFLBar>
            <Profile />
            <ItemTRFLBar onClick={changeVisProfileBlock}>
              <UserSVG />
              <span>Профиль</span>
              <ChevronDownSVG />
            </ItemTRFLBar>
            <ItemTRFLBar>
              <ShoppingCartSVG />
              <span>Корзина</span>
              <ChevronDownSVG />
            </ItemTRFLBar>
          </TRFLBar>
        </TopWrapper>
      </Top>
      <Center>
        <CenterWrapper>
          <LogoSVG />
          <Search>
            <InputSearch>
              <SearchIcon>
                <SeacrhSVG />
              </SearchIcon>
              <CustomInput placeholder="Поиск по..." />
              <Categories>
                {listCategories.map((elem, index) => (
                  <option key={index} value={elem}>
                    {elem}
                  </option>
                ))}
              </Categories>
            </InputSearch>
            <SearchButton>Поиск</SearchButton>
          </Search>
        </CenterWrapper>
      </Center>
      <Bottom>
        <BottomWrapper>
          <NavBar>
            {listMenu.map((elem, index) =>
              index === 0 ? (
                <FirstItemNavBar key={index}>
                  <MenuSVG />
                  Меню
                </FirstItemNavBar>
              ) : (
                <ItemNavBar key={index}>{elem}</ItemNavBar>
              )
            )}
          </NavBar>
        </BottomWrapper>
      </Bottom>
    </Container>
  );
};
