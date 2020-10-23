import { gql } from '@apollo/client';

const GET_CURRENT_USER = gql`
    query getCurrentUser {
        user{
        id
        email
        }
    }
`;

export default GET_CURRENT_USER;