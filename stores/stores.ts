import { useStaticRendering } from 'mobx-react';

import AuthStore, { AuthStoreProps } from './AuthStore/AuthStore';
import { User } from './AuthStore/AuthStore.props';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export interface Store {
    authStore: AuthStoreProps
}

const userInitialData:User = {
    name: "",
    email: "",
    accessToken: "",
    emailVerified: false,
    profilePicture: ""
}


const authStoreInitialData = {
    loggedIn: false,
    verified: false,
    setLoggedIn: () => null,
    logout: () => null,
    user: userInitialData,
    updateUserInformation: () => null
}

export default function initializeStore(initialData: Store = {authStore: authStoreInitialData}) {
    if (isServer) {
        return {
            authStore: new AuthStore(initialData.authStore),
        };
    }
    if (store === null) {
        store = {
            authStore: new AuthStore(initialData.authStore),
        };
    }

    return store;
}