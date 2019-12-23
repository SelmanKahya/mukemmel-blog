import { useState } from "react";
import { Mutation } from "@apollo/react-components";
import { inject, observer } from 'mobx-react';
import { AuthStoreProps } from "../stores/AuthStore/AuthStore";
import REGISTER_MUTATION from "../graphql/mutations/register";
import { toast } from 'react-toastify'

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

    const onClickRegister = async () => {
        const register = await props.authStore.registerUser(email, password)

        if (register === true) {
            setShowRegisterDialog(false)
            toast.success(`Successfully registered`)
        } else {
            toast.error(register.message)
        }
    }

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

                            <button className="btn rounded" > Register </button>

                        </form>
                    </div>

                </div>

            )
        }

    }

    return (
        <div>
            {authButtons()}
            {Dialog()}
            {loading ? 'loading'  : null}
        </div>
    )

}));

export default RegisterDialog