import { useState, useEffect } from "react";
import { Mutation } from "@apollo/react-components";
import LOGIN_QUERY from "../graphql/mutations/login";
import ReactTooltip from 'react-tooltip'
import Loading from "./loading";
import Link from "next/link";
import Cookies from 'js-cookie'
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/stores";
import { AuthStoreProps } from "../stores/AuthStore";
import REGISTER_MUTATION from "../graphql/mutations/register";
import Toast from 'light-toast'

interface Props {
    authStore?: AuthStoreProps
}

var RegisterDialog = inject("authStore")(observer((props: Props) => {

    const [showRegisterDialog, setShowRegisterDialog] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)

    const authButtons = () => (
        <div>
            <div className="btn mx-auto" onClick={() => setShowRegisterDialog(true)}>Register</div>
        </div>

    )

    const Dialog = () => {

        if (showRegisterDialog) {
            return (
                <div>
                    <div className="loadingBg"></div>
                    <div className="loginDialog">
                        <div className="text-2xl font-semibold m-5">
                            Register
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input type="text" id="name" onChange={e => setName(e.target.value)} placeholder="Muhammed Kaplan" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="test@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="password123" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    Password Confirm
                                </label>
                                <input type="password" id="password" onChange={e => setPasswordConfirmation(e.target.value)} placeholder="password123" required />
                            </div>

                            {_registerBtn()}

                        </form>
                    </div>

                </div>

            )
        }

    }
    const _registerBtn = () => {
        return (
            <Mutation mutation={REGISTER_MUTATION({
                email: email,
                password: password,
                password_confirmation: password,
                name: name
            })}
                onCompleted={({ register }) => {
                    setShowRegisterDialog(false)
                    setLoading(false)
                    Toast.success('You have now successfully registered, please log in.', 3000)
                }}

                onError={({ errors }) => {
                    setLoading(false)
                }}
            >
                {mutation => (
                    <button className="btn rounded" onClick={e => {
                        e.preventDefault()

                        if (password !== passwordConfirmation) {
                            Toast.fail('Your password must be equal!')
                            return
                        }
                        mutation()
                        setLoading(true)
                    }}>
                        Register
              </button>
                )}
            </Mutation>
        )
    }

    return (
        <div>
            {authButtons()}
            {Dialog()}
            {loading ? Toast.loading('Loading...') : null}
        </div>
    )

}));

export default RegisterDialog