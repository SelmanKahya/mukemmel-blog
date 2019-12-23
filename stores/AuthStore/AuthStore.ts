import { observable, action } from 'mobx';
import Cookies from 'js-cookie'
import { Arguments, User } from './AuthStore.props';
import { loadDB } from '../../utils/firebase';



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
  
  @action async login(email: string, password: string) {
    const db = await loadDB()
    return db.auth().signInWithEmailAndPassword(email, password).then(async ({ user }) => {
      const token = await user.getIdToken(false)
      const data: User = {
        email: user.email,
        emailVerified: user.emailVerified,
        name: user.displayName,
        profilePicture: user.photoURL,
        accessToken: token
      }
      this.user = data
      this.setLoggedIn(true)
      return true
    }).catch(err => {
      return err
    })
  }

  @action  async logout() {
    const db = await loadDB()
    await db.auth().signOut()
    this.setLoggedIn(false)
  }

  @action updateUserInformation(user: User) {
    this.user = user
  }



}

export default AuthStore;