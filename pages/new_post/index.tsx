import Page from "../../layouts/main"
import { useState } from "react";
import { inject, observer } from "mobx-react";
import { AuthStoreProps } from "../../stores/AuthStore/AuthStore";
import dynamic from "next/dynamic";
import urlSlug from 'url-slug'
import { loadDB } from "../../utils/firebase";

interface Props {
    authStore?: AuthStoreProps
}

const Editor = dynamic(
    () => import('../../components/editor'),
    { ssr: false }
)

const NewPost = inject('authStore')(observer((props: Props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const currentUserName = props.authStore.user.name || props.authStore.user.email
    const currentUserImage = props.authStore.user.profilePicture

    const _onChangeImage = e => {
        setImage(e.target.files[0])
        return
    }

    const createNewPost = e => {
        e.preventDefault()
        const db = loadDB()
        const uploadedImageUrl = _uploadImage(image)

        db.firestore().collection('posts').add({
            title: title,
            content: content,
            slug: urlSlug(title),
            created_at: Date.now(),
            username: currentUserName,
            userImage: currentUserImage,
            image: uploadedImageUrl
        }).then(resp => {
            alert('tamamdir')
        }).catch(err => {
            console.log(err)
        })
    }

    const _uploadImage = async image => {
        const db = await loadDB()
        const storageRef = db.storage().ref();
        const randomId = '_' + Math.random().toString(36).substr(2, 9);

        return storageRef.child(`/posts/${randomId}`).put(image).then(async resp => {
            return await resp.ref.getDownloadURL()
        })
    }

    return (
        <Page className="m-12" loginRequired={true}>
            <div className="w-full p-5 bg-gray-100 mx-auto newPost">
                <div className="text-2xl font-semibold m-5 text-center">
                    New Post
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">
                            Post Title:
                                </label>
                        <input type="text" id="email" placeholder="Your post title." required onChange={e => setTitle(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">
                            Post Content
                        </label>
                        <Editor onChange={e => setContent(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            Post Image
                        </label>
                        <input type="file" onChange={_onChangeImage}/>
                    </div>
                    <div className="form-group">
                    <button className="btn rounded" onClick={createNewPost}>
                        Create new post
                    </button>
                    </div>

                </form>
            </div>
        </Page>
    )

}))

export default NewPost