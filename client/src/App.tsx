import {FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";
import {NavBar} from "./components/NavBar";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}
