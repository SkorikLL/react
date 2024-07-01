import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../Main/Main.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

function Header({ name, onCardAdd, email, changeTheme, setChangeTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    // Для изменения состояния вызываем функцию setIsOpen и передаем новое
    // значение в качестве аргумента.
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
  }

  const onchangeTheme = () => {
    setChangeTheme(changeTheme === "light" ? "dark" : "light");
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="public/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="public/logo_dark.png" alt="logo" />
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderBtnMainNew id="btnMainNew" onClick={onCardAdd}>
              <a
              //href="#popNewCard"
              >
                Создать новую задачу
              </a>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={handleClick} style={{ cursor: "pointer" }}>
              {name || "Пользователь"}
            </S.HeaderUser>
            {isOpen && (
              <S.HeaderPopUserSet id="user-set-target">
                <S.PopUserSetName>{name || "Пользователь"}</S.PopUserSetName>
                <S.PopUserSetMail>{email || "-"}</S.PopUserSetMail>
                <S.PopUserSetTheme>
                  <p>Темная тема</p>
                  <input
                    checked={changeTheme === "dark"}
                    onClick={onchangeTheme}
                    type="checkbox"
                    name="checkbox"
                  />
                </S.PopUserSetTheme>
                <button type="button">
                  <Link to={AppRoutes.EXIT}>Выйти</Link>
                </button>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
}

export default Header;
