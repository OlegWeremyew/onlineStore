import {Auth} from "./pages/Auth";
import {Admin} from "./pages/Admin";
import {AUTH_ROUTE_PATHS, PUBLIC_ROUTE_PATHS} from "./constants";
import {Basket} from "./pages/Basket";
import {Shop} from "./pages/Shop";
import {DevicePage} from "./pages/DevicePage";
import {FC} from "react";
import {ErrorPage} from "./pages/ErrorPage";

export type RouterPathsType = {
  path: string
  Component: FC
}

export const authRoutes: RouterPathsType[] = [
  {
    path: AUTH_ROUTE_PATHS.ADMIN,
    Component: Admin,
  },
  {
    path: AUTH_ROUTE_PATHS.BASKET,
    Component: Basket,
  },
]

export const publicRoutes: RouterPathsType[] = [
  {
    path: PUBLIC_ROUTE_PATHS.SHOP,
    Component: Shop,
  },
  {
    path: PUBLIC_ROUTE_PATHS.LOGIN,
    Component: Auth,
  },
  {
    path: PUBLIC_ROUTE_PATHS.REGISTRATION,
    Component: Auth,
  },
  {
    path: `${PUBLIC_ROUTE_PATHS.DEVICE}/:id`,
    Component: DevicePage,
  },
  {
    path: `*`,
    Component: ErrorPage,
  },
]
