const columnTitle = [
  "БЕЗ СТАТУСА",
  "НУЖНО СДЕЛАТЬ",
  "В РАБОТЕ",
  "ТЕСТИРОВАНИЕ",
  "ГОТОВО",
];

function Column({ children }) {
  return (
    <>
      {columnTitle.map((title) => (
        <div key={title} className="main__column">
          <div className="column__title">
            <p>{title}</p>
          </div>
          {children}
        </div>
      ))}
    </>
  );
}

export default Column;
