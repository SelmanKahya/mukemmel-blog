import { gql } from 'apollo-boost'

interface Args {
    email: string,
    password: string
}

export default ({email, password}: Args) => gql`

    mutation {
        login(email: "${email}" password: "${password}") {
            email
            accessToken
            emailVerified
            name
        }
    }
`;