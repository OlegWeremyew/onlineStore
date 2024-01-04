import {FC, ReactNode, useContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes, RouterPathsType} from "../routes";
import {Context} from "../index";

export const AppRouter: FC = () => {
  const {user} = useContext(Context)

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}: RouterPathsType): ReactNode => (
        <Route key={path} path={path} element={<Component/>}/>
      ))}
      {publicRoutes.map(({path, Component}: RouterPathsType): ReactNode => (
        <Route key={path} path={path} element={<Component/>}/>
      ))}
    </Routes>
  );
};
