import { AuthStoreProps } from "../../stores/AuthStore/AuthStore";
import { PostProps } from "../../utils/props";

export interface Props {
    authStore: AuthStoreProps
    posts: Array<PostProps>
}