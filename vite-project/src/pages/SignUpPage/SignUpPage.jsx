import { Link } from "react-router-dom";
import { GlobalStyle } from "../../Global.styled";
import Wrapper from "../../components/Wrapper/Wrapper";
import {
  Modal,
  ModalBlock,
  ModalFormGroup,
  ModalFormLogin,
  ModalTTL,
} from "../SignInPage/SignInPage.styled";
import { ContainerSignUp } from "./SignUpPage.styled";
import { AppRoutes } from "../../lib/appRoutes";

export function SignUpPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ContainerSignUp>
          <Modal>
            <ModalBlock>
              <ModalTTL>
                <h2>Регистрация</h2>
              </ModalTTL>
              <ModalFormLogin id="formLogUp" action="#">
                <input
                  className="modal__input first-name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
                <input
                  className="modal__input login"
                  type="text"
                  name="login"
                  id="loginReg"
                  placeholder="Эл. почта"
                />
                <input
                  className="modal__input password-first"
                  type="password"
                  name="password"
                  id="passwordFirst"
                  placeholder="Пароль"
                />
                <button
                  className="modal__btn-signup-ent _hover01"
                  id="SignUpEnter"
                >
                  <Link to={AppRoutes.HOME}>Зарегистрироваться</Link>
                </button>
                <ModalFormGroup>
                  <p>
                    Уже есть аккаунт?
                    <Link to={AppRoutes.SIGNIN}>Войдите здесь</Link>
                  </p>
                </ModalFormGroup>
              </ModalFormLogin>
            </ModalBlock>
          </Modal>
        </ContainerSignUp>
      </Wrapper>
    </>
  );
}

export default SignUpPage;
