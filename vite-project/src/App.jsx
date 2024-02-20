import "./App.css";

import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Column from "./components/Column/Column";
import { cardList } from "./data";
import { useEffect, useState } from "react";
import { GlobalStyle } from "./Global.styled.js";
import { Container } from "./components/Main/Main.styled.js";

const userName = "Ivan Ivanov";
const userEmail = "ivan.ivanov@gmail.com";

function App() {
  const [cards, setCards] = useState(cardList);

  function onCardAdd() {
    console.log(cardList);
    const newCard = {
      id: cards.length + 1,
      theme: "Research",
      title: "Названия задачи!!!!!!!!!",
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
      <GlobalStyle />
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header name={userName} email={userEmail} onCardAdd={onCardAdd} />
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
    </>
  );
}

export default App;
