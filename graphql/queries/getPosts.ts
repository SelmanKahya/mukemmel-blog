import { gql } from 'apollo-boost'

export default gql`
    {
        posts {
            id
            title,
            content,
            slug,
            username,
            userImage,
            created_at
        }
    }
`;