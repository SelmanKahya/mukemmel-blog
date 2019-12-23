export interface User extends Object {
    name: string
    accessToken: string
    email: string
    emailVerified: boolean
    profilePicture: string
}
  
export interface Arguments {
    verified: boolean
    loggedIn: boolean
    user: User
}