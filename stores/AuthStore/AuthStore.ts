import { observable, action } from 'mobx';
import Cookies from 'js-cookie'
import { Arguments, User } from './AuthStore.props';



export type AuthStoreProps = AuthStore

class AuthStore {
  @observable loggedIn = false;
  @observable verified = false;
  @observable user: User
  
  constructor(initialData: Arguments) {
    this.loggedIn = initialData.loggedIn
    this.verified = initialData.verified
    this.user  = initialData.user
  }

  @action setLoggedIn(value: boolean) {
    this.loggedIn = value
  }
  
  @action logout() {
    localStorage.clear()
    Cookies.remove('accessToken')
    this.setLoggedIn(false)
  }

  @action updateUserInformation(user: User) {
    this.user = user
  }



}

export default AuthStore;