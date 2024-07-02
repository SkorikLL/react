import Main from "../../components/Main/Main";

import PopNewCard from "../../components/PopNewCard/PopNewCard";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import Column from "../../components/Column/Column";

import { cardList } from "../../data";
import { useEffect, useState } from "react";

import { GlobalStyle } from "../../Global.styled.js";
import { Container } from "../../components/Main/Main.styled";

import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../../../theme.js";

const userName = "Ivan Ivanov";
const userEmail = "ivan.ivanov@gmail.com";

export function MainPage() {
  const [cards, setCards] = useState(cardList);
  const [changeTheme, setChangeTheme] = useState("light");

  function onCardAdd() {
    console.log(cardList);
    const newCard = {
      id: cards.length + 1,
      theme: "Research",
      title: "Названия задачи",
      date: "30.10.23",
      status: "БЕЗ СТАТУСА",
    };
    setCards([...cards, newCard]);
    console.log(newCard);
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 секунды задержки
  }, []);

  return (
    <>
      <ThemeProvider theme={changeTheme === "light" ? light : dark}>
        <GlobalStyle />
        <Wrapper>
          <Outlet />
          <PopNewCard />
          <Header
            name={userName}
            email={userEmail}
            onCardAdd={onCardAdd}
            setChangeTheme={setChangeTheme}
            changeTheme={changeTheme}
          />
          {isLoading ? (
            <Container>Загрузка...</Container>
          ) : (
            <Main>
              <Column cards={cards}>
                {/*  
          Cards находится в Column */}
              </Column>
            </Main>
          )}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default MainPage;
