import React, { Component } from 'react'
import Page from '../layouts/main'
import { inject, observer } from 'mobx-react'
import { AuthStoreProps } from '../stores/AuthStore/AuthStore'

interface Props {
    authStore?: AuthStoreProps
}


@inject('authStore')
@observer
class UpdateProfile extends Component<Props> {

    _onProfilePicture = e => {
        alert('clicked')
    }

    render() {
        const { authStore } = this.props
        const { user } = authStore
        const profilePicture = authStore.user.profilePicture ? user.profilePicture : "https://irisvision.com/wp-content/uploads/2019/01/no-profile.png"

        return (
            <Page>
                <div className="profilePage container mt-12">
                    <div className="profilePicture w-24 h-12 mx-auto cursor-pointer" onClick={this._onProfilePicture}>
                        <img src={profilePicture} />
                    </div>
                    <div className="profileDetail">
                        <h3>{user.email}</h3>
                    </div>
                </div>
            </Page>
        )

    }
}


export default UpdateProfile