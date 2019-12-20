import { useStaticRendering } from 'mobx-react';

import AuthStore, { AuthStoreProps } from './AuthStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export interface Store {
    authStore: AuthStoreProps
}


const authStoreInitialData = {
    loggedIn: false,
    verified: false,
    setLoggedIn: () => null,
    logout: () => null
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