import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import UserStore, {IUserStore} from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// interface DefaultStore {
//   user: IUserStore
// }

//export const Context = createContext<DefaultStore>({} as DefaultStore)
export const Context = createContext<any>(null)

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    devices: new DeviceStore(),
  }}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Context.Provider>
);
