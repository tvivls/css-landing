import {
  ItemProfile,
  ProfileBlock,
  ProfileBlockWrapper,
} from "@/styles/components/Profile";

export const Profile = () => {
  return (
    <ProfileBlock id="profile">
      <ProfileBlockWrapper>
        <ItemProfile>Войти</ItemProfile>
        <ItemProfile>Зарегистрироваться</ItemProfile>
      </ProfileBlockWrapper>
    </ProfileBlock>
  );
};
