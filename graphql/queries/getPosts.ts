import { gql } from 'apollo-boost'

export default gql`
    {
        posts {
            title,
            content,
            slug,
            username,
            userImage,
            created_at
        }
    }
`;