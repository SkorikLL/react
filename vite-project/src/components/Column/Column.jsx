import Cards from "../Cards/Cards";
import { ColumnTitle, MainColumn } from "./Column.styled";

const statusList = [
  "БЕЗ СТАТУСА",
  "НУЖНО СДЕЛАТЬ",
  "В РАБОТЕ",
  "ТЕСТИРОВАНИЕ",
  "ГОТОВО",
];

function Column({ cards }) {
  return (
    <>
      {statusList.map((title) => (
        <MainColumn key={title}>
          <ColumnTitle>
            <p>{title}</p>
          </ColumnTitle>
          <Cards events={cards} statusTitle={title}></Cards>
        </MainColumn>
      ))}
    </>
  );
}

export default Column;
