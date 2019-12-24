import { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip'
import Loading from "./loading";
import Link from "next/link";
import { inject, observer } from 'mobx-react';
import { AuthStoreProps } from "../stores/AuthStore/AuthStore";
import { toast } from 'react-toastify';
import { loadDB } from "../utils/firebase";
import { User } from "../stores/AuthStore/AuthStore.props";
import RegisterDialog from "./registerDialog";
interface Props {
    authStore?: AuthStoreProps
}

var LoginDialog = inject("authStore")(observer((props: Props) => {

    const [showLoginDialog, setShowLoginDialog] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const db = loadDB()

        db.auth().onAuthStateChanged(user => {
            if (user) {
                setLoggedIn(true)
                setName(user.displayName)
                setEmail(user.email)
                props.authStore.setLoggedIn(true)
                user.getIdToken(false).then(token => {

                    const data: User = {
                        email: user.email,
                        emailVerified: user.emailVerified,
                        name: user.displayName,
                        profilePicture: user.photoURL,
                        accessToken: token
                    }
                    
                    props.authStore.setUserInformation(data)
                })


            } else {
                setLoggedIn(false)
                props.authStore.setLoggedIn(false)
            }
        })

    })

    const authButtons = () => (
        <div>
            <div className="btn mx-auto" onClick={() => setShowLoginDialog(true)}>Log in</div>
            <RegisterDialog/>

        </div>

    )

    const Dialog = () => {

        if (showLoginDialog) {
            return (
                <div>
                    <div className="loadingBg"></div>
                    <div className="loginDialog">
                        <div className="text-2xl font-semibold m-5">
                            Login
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="text" id="email" onChange={e => setEmail(e.target.value)} placeholder="test@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="password123" required />
                            </div>

                            <button className="btn rounded" onClick={_onClickLogin}> Log in </button>
                        </form>
                    </div>

                </div>

            )
        }

    }

    const _onClickLogin = async e => {
        e.preventDefault()
        const login = await props.authStore.login(email, password)
        console.log(login)
        if (login === true) {
            setLoggedIn(true)
            setShowLoginDialog(false)
            toast.success(`Successfully logged in`)
        } else {
            toast.error(login.message)
        }
    }

    const logOut = () => {
        props.authStore.logout()
        setLoggedIn(false)
        toast.success(`Successfully logged out!`)

    }

    const _renderButton = () => {
        if (isLoggedIn) {
            return (
                <div>
                    <div className="btn" onClick={logOut}>
                        <a data-tip="Logout"> {name || email} </a>
                        <ReactTooltip place="bottom" type="error" effect="solid" />
                    </div>

                    <div className="btn mx-auto">
                        <Link href="new_post">
                            New Post
                        </Link>
                    </div>
                    <div className="btn mx-auto">
                        <Link href="update_profile">
                            Update Profile
                        </Link>
                    </div>
                </div>
            )
        } else {
            return authButtons()
        }
    }

    return (
        <div>
            {_renderButton()}
            {Dialog()}
            {loading ? <Loading /> : null}
        </div>
    )

}));

export default LoginDialog