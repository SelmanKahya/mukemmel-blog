import { gql } from 'apollo-boost'

export default (page: string) => gql`
    {
        staticPages(page: "${page}") {
            content
        }
    }
`;