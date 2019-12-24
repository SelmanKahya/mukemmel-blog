import React, { Component } from 'react'
import Page from '../../layouts/main'
import { inject, observer } from 'mobx-react'
import { AuthStoreProps } from '../../stores/AuthStore/AuthStore'
import { loadDB } from '../../utils/firebase'
import { toast } from 'react-toastify'

interface Props {
    authStore?: AuthStoreProps
}

interface State {
    image: File
    imagePreview: string
    renderLoading: boolean
    name: string
}

@inject('authStore')
@observer
class UpdateProfile extends Component<Props, State> {
    state: State = {
        image: null,
        imagePreview: this.props.authStore.user.profilePicture || "https://irisvision.com/wp-content/uploads/2019/01/no-profile.png",
        renderLoading: false,
        name: this.props.authStore.user.name
    }

    _onProfilePicture = async e => {
        e.preventDefault()
        const file = e.target.files[0]
        this.setState({
            image: file,
            imagePreview: URL.createObjectURL(file),
            renderLoading: true
        })
        const uploadedImageUrl = await this._uploadUserImage(file)
        this.props.authStore.updateUserInformation({
            photoURL: uploadedImageUrl
        }).then(resp => {
            this.setState({
                imagePreview: uploadedImageUrl,
                renderLoading: false
            })
            toast.success('You successfully updated your profile picture!')
        }).catch(err => {
            toast.error('Something really bad happpened!')
        })

        this.setState({
            renderLoading: false
        })
    }
    _onName = async e => {
        this.setState({
            name: e.target.value
        })
    }
    _onSave = async e => {
        this.props.authStore.updateUserInformation({
            displayName: this.state.name
        }).then(resp => {
            toast.success('You successfully updated your profile!')
        }).catch(err => {
            toast.error('Something really bad happpened!')
        })

        if(process.browser) {
            window.location.href = '/'
        }

    }

    _uploadUserImage = async image => {
        const db = await loadDB()
        const storageRef = db.storage().ref();
        const randomId = '_' + Math.random().toString(36).substr(2, 9);

        return storageRef.child(`/users/${randomId}`).put(image).then(async resp => {
            return await resp.ref.getDownloadURL()
        })
    }

    render() {
        const { renderLoading, imagePreview, name } = this.state
        const profilePicture = imagePreview

        return (
            <Page isLoading={renderLoading}>
                <div className="profilePage container mt-12 p-5 rounded-lg">
                    <div className="profilePicture w-32 mx-auto">
                        <img src={profilePicture} />
                        <input type="file" className="input cursor-pointer" onChange={this._onProfilePicture} />
                    </div>
                    <div className="profileDetail m-5">
                        <div className="form-group">
                            <label htmlFor="name">
                                Name:
                            </label>
                            <input type="text" id="name" placeholder="Your name.." onChange={this._onName} value={name} />
                        </div>
                        <div className="form-group mx-auto">
                            <button className="btn btn-yellow " onClick={this._onSave}> Save  </button>
                        </div>
                    </div>
                </div>
            </Page>
        )

    }
}


export default UpdateProfile