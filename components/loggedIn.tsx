import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import React from 'react'
import { AuthStoreProps } from "../stores/AuthStore/AuthStore";


interface Props {
    children: React.ReactNode,
    authStore?: AuthStoreProps
}


const LoggedIn = inject('authStore')(observer((props: Props) => {
    const { children } = props

    if (props.authStore.loggedIn) {
        return (
            <div>
                {children}
            </div>
        );
    }

    return (
        <h1 className="text-center m-12 font-semibold">
            You need to be logged in for view this page.
        </h1>
    )
    
}))


export default LoggedIn;