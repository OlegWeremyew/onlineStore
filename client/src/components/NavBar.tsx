import {FC, useContext} from 'react';
import {Context} from "../index";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {NavLink, useNavigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import {AUTH_ROUTE_PATHS, PUBLIC_ROUTE_PATHS} from "../constants";
import {observer} from "mobx-react-lite";

export const NavBar: FC = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const logOut = (): void => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={PUBLIC_ROUTE_PATHS.SHOP}>Купить Девайс</NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(AUTH_ROUTE_PATHS.ADMIN)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => navigate(PUBLIC_ROUTE_PATHS.LOGIN)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});
