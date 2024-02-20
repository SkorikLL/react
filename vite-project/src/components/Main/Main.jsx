import * as S from "./Main.styled";

function Main({ children }) {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>{children}</S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
}

export default Main;
