import "./App.css";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Column from "./components/Column/Column";
import Cards from "./components/Cards/Cards";

const userName = "Ivan Ivanov";
const userEmail = "ivan.ivanov@gmail.com";
const events = [
  {
    id: 0,
    theme: "Web Design",
    title: "Название задачи",
    date: "30.10.23",
  },
  {
    id: 1,
    theme: "Research",
    title: "Название задачи",
    date: "30.10.23",
  },
  {
    id: 2,
    theme: "Web Design",
    title: "Название задачи",
    date: "30.10.23",
  },
];

function App() {
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header name={userName} email={userEmail} />
        <Main>
          <Column>
            <Cards events={events} />
          </Column>
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
