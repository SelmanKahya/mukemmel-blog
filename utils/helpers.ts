import cookie from 'cookie'
import { gql } from 'apollo-boost'
import { NextPageContext } from 'next'
import { ApolloAppContext } from 'next-with-apollo'
import nextCookies from 'next-cookies'

export const verifyAuthenticated = async (ctx: NextPageContext & ApolloAppContext)  => {
    const { apolloClient } = ctx
    const rawCookies = nextCookies(ctx)

    const token = rawCookies['accessToken']
    if (!token) {
        return false
    }
    
    const QUERY = gql`
    {
        verifyToken(accessToken: "${token}") {
            verified
        }
    }
    `

    const { data } = await apolloClient.query({
        query:QUERY
    })
    
    return data.verifyToken.verified
} 