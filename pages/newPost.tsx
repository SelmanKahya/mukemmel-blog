import Page from "../layouts/main"
import { useState } from "react";
import { inject, observer } from "mobx-react";
import { AuthStoreProps } from "../stores/AuthStore";
import dynamic from "next/dynamic";
import { Mutation } from "@apollo/react-components";
import NEW_POST_QUERY from "../graphql/mutations/newPost";
import Router from 'next/router'

interface Props {
    authStore?: AuthStoreProps
}

const Editor = dynamic(
    () => import('../components/editor'),
    { ssr: false }
)

const NewPost = inject('authStore')(observer((props: Props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const _submitBtn = () => {
        return (
            <Mutation mutation={NEW_POST_QUERY({
                title: title,
                content: content,
                image: "image",
                accessToken: localStorage.getItem('accessToken')
            })}
                onCompleted={({ add_post }) => {
                   Router.push(`/${add_post.slug}`)
                }}
            >
                {mutation => (
                    <button className="btn rounded" onClick={e => {
                        e.preventDefault()
                        mutation()
                    }}>
                        Create new post
                    </button>
                )}
            </Mutation>
        )
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
                    {title}
                    <div className="form-group">
                        {_submitBtn()}
                    </div>

                </form>
            </div>
        </Page>
    )

}))

export default NewPost