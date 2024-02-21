import * as S from "./Cards.styled";

function Cards({ events, statusTitle }) {
  //Фильтр карточек по столбцам (пока фильтрую карточки со статусом "БЕЗ СТАТУСА" во все столбцы, нужно доработать!!!)
  const eventsFilter = events.filter((card) => card.status === statusTitle);
  //let ColorTitleCard ="";

  return (
    <>
      {eventsFilter.map((card) => (
        <S.Cards key={card.id}>
          <S.CardsItem>
            <div className="cards__card card">
              <S.CardsGroup>
                <S.CardTopic
                  $topicColor={
                    card.theme === "Web Design"
                      ? "_orange"
                      : card.theme === "Research"
                      ? "_green"
                      : card.theme === "Copywriting"
                      ? "_purple"
                      : "_gray"
                  }
                >
                  <S.TopicText>{card.theme}</S.TopicText>
                </S.CardTopic>
                <a href="#popBrowse" target="_self">
                  <S.CardsBtn>
                    <div></div>
                    <div></div>
                    <div></div>
                  </S.CardsBtn>
                </a>
              </S.CardsGroup>
              <S.CardsContent>
                <a href="" target="_blank">
                  <S.CardsTitle
                    style={{
                      textDecoration:
                        statusTitle === "ГОТОВО" ? "line-through" : "none",
                    }}
                  >
                    {card.title}
                  </S.CardsTitle>
                </a>
                <S.CardsDate>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_415)">
                      <path
                        d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                        stroke="#94A6BE"
                        strokeWidth="0.8"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                        stroke="#94A6BE"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_415">
                        <rect width="13" height="13" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>{card.date}</p>
                </S.CardsDate>
              </S.CardsContent>
            </div>
          </S.CardsItem>
        </S.Cards>
      ))}
    </>
  );
}

export default Cards;
