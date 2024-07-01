import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";
import * as S from "./PopExit.styled";

function PopExit() {
  return (
    <S.PopExit id="popExit">
      <S.PopExit__container>
        <S.PopExit__block>
          <S.PopExit__ttl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExit__ttl>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExit__formGroup>
              <S.PopExit__exitYes className=" _hover01" id="exitYes">
                <Link to={AppRoutes.SIGNIN}>Да, выйти</Link>
              </S.PopExit__exitYes>
              <S.PopExit__exitNo className="_hover03" id="exitNo">
                <Link to={AppRoutes.HOME}>Нет, остаться</Link>
              </S.PopExit__exitNo>
            </S.PopExit__formGroup>
          </form>
        </S.PopExit__block>
      </S.PopExit__container>
    </S.PopExit>
  );
}

export default PopExit;
