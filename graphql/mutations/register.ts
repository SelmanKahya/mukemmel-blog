import { gql } from 'apollo-boost'

interface Args {
    email: string,
    password: string
    password_confirmation: string
    name: string
}

export default ({email, password, password_confirmation, name}: Args) => gql`

    mutation {
        register(email: "${email}" password: "${password}" password_confirmation: "${password_confirmation}" name: "${name}") {
            email
            name
            emailVerified
        }
    }
`;