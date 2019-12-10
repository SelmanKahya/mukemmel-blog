import { gql } from 'apollo-boost'

export default (slug: string) => gql`
    {
        posts(slug: "${slug}") {
            title,
            content,
            slug,
            username,
            userImage,
            created_at
        }
    }
`;