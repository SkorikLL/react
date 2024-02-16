import Cards from "../Cards/Cards";

const statusList = [
  "БЕЗ СТАТУСА",
  "НУЖНО СДЕЛАТЬ",
  "В РАБОТЕ",
  "ТЕСТИРОВАНИЕ",
  "ГОТОВО",
];

function Column(props) {
  return (
    <>
      {statusList.map((title) => (
        <div key={title} className="main__column">
          <div className="column__title">
            <p>{title}</p>
          </div>
          <Cards events={props.cards} statusTitle={title}></Cards>
        </div>
      ))}
    </>
  );
}

export default Column;
