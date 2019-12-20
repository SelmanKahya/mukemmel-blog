import { gql } from 'apollo-boost'

interface Args {
    title: string,
    content: string
    image: string
    accessToken: string
}

export default ({title, content, image, accessToken}: Args) => gql`

    mutation {
        add_post(title: "${title}" content: "${content}" image: "${image}" accessToken: "${accessToken}") {
            title
            content
            slug
        }
    }
`;