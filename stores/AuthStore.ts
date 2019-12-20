import { observable, action } from 'mobx';
import Cookies from 'js-cookie'

interface Arguments {
  verified: boolean
  loggedIn: boolean
}

export type AuthStoreProps = AuthStore

class AuthStore {
  @observable loggedIn = false;
  @observable verified = false;
  
  constructor(initialData: Arguments) {
    this.loggedIn = initialData.loggedIn
    this.verified = initialData.verified
  }

  @action setLoggedIn(value: boolean) {
    this.loggedIn = value
  }
  
  @action logout() {
    localStorage.clear()
    Cookies.remove('accessToken')
    this.setLoggedIn(false)
  }



}

export default AuthStore;