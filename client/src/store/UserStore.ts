import {makeObservable} from "mobx";

export interface IUserStore {
  _isAuth: boolean
  _user: object
}

export default class UserStore {
  _isAuth: boolean
  _user: object

  constructor() {
    this._isAuth = true
    this._user = {}
    makeObservable(this)
  }

  setIsAuth(isAuth: boolean) {
    this._isAuth = isAuth
  }

  setUser(user: object) {
    this._user = user
  }

  //getters
  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}
