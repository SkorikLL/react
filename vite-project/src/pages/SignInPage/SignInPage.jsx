import { Link, useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global.styled";
import Wrapper from "../../components/Wrapper/Wrapper";
import {
  ContainerSignIn,
  Modal,
  ModalBlock,
  ModalFormGroup,
  ModalFormLogin,
  ModalInput,
  ModalTTL,
} from "./SignInPage.styled";
import { AppRoutes } from "../../lib/appRoutes";

export function SignInPage() {
  let navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    // Обработка формы...

    navigate("/"); // Перенаправление на другую страницу
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ContainerSignIn>
          <Modal>
            <ModalBlock>
              <ModalTTL>
                <h2>Вход</h2>
              </ModalTTL>
              <ModalFormLogin id="formLogIn" action="#" onSubmit={handleSubmit}>
                <ModalInput
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                />
                <ModalInput
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                />
                <button className="modal__btn-enter _hover01" id="btnEnter">
                  <p>Войти</p>
                </button>
                <ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to={AppRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
                </ModalFormGroup>
              </ModalFormLogin>
            </ModalBlock>
          </Modal>
        </ContainerSignIn>
      </Wrapper>
    </>
  );
}

export default SignInPage;
