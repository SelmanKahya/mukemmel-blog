import { useState, useEffect } from "react";
import { Mutation } from "@apollo/react-components";
import LOGIN_QUERY from "../graphql/mutations/login";
import ReactTooltip from 'react-tooltip'
import Loading from "./loading";
import Link from "next/link";
import Cookies from 'js-cookie'
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/stores";
import { AuthStoreProps } from "../stores/AuthStore/AuthStore";
import { User } from "../stores/AuthStore/AuthStore.props";


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
        const userDetails = JSON.parse(localStorage.getItem('user'))
        localStorage.getItem('accessToken') ? setLoggedIn(true) : false
        props.authStore.updateUserInformation(userDetails)


        props.authStore.setLoggedIn(true)
        if (isLoggedIn) {
            setName(userDetails.user.name)
            setEmail(userDetails.user.email)
        }

    })

    const authButtons = () => (
        <div>
            <div className="btn mx-auto" onClick={() => setShowLoginDialog(true)}>Log in</div>
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
                                <input type="text" id="email" onChange={e => setEmail(e.target.value)} placeholder="test@email.com" required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="password123" required/>
                            </div>

                            {_loginBtn()}

                        </form>
                    </div>

                </div>

            )
        }

    }
    const _loginBtn = () => {
        return (
            <Mutation mutation={LOGIN_QUERY({
                email: email,
                password: password
            })}
                onCompleted={({ login }) => {
                    props.authStore.updateUserInformation(login)
                    localStorage.setItem('accessToken', login.accessToken)
                    localStorage.setItem('user', JSON.stringify({ user: login }))
                    Cookies.set('accessToken', login.accessToken)
                    setShowLoginDialog(false)
                    props.authStore.setLoggedIn(true)
                    setLoading(false)
                }}
            >
                {mutation => (
                    <button className="btn rounded" onClick={e => {
                        e.preventDefault()
                        mutation()
                        setLoading(true)
                    }}>
                        Log in
              </button>
                )}
            </Mutation>
        )
    }

    const logOut = () => {
        props.authStore.logout()
        setLoggedIn(false)
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
                        <Link href="newPost">
                            New Post
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
            {loading ? <Loading/> : null}
        </div>
    )

}));

export default LoginDialog