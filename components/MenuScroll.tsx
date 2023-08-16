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
  ContainerWrapper,
  Bottom,
} from "@/styles/components/MenuScroll";

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
import { Profile } from "./Profile";

export const MenuScroll = () => {
  const changeVisProfileBlock = () => {
    const profileBlock = document.getElementById("profile");
    if (profileBlock) {
      profileBlock.style.display =
        profileBlock.style.display === "none" ? "block" : "none";
    }
  };

  return (
    <Container id="menuScroll">
      <ContainerWrapper>
        <Top>
          <TopWrapper>
            <Location>
              <LocationSVG />
              <span>Москва</span>
            </Location>
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
        <Bottom>
          <BottomWrapper>
            <LogoSVG />
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
      </ContainerWrapper>
    </Container>
  );
};
