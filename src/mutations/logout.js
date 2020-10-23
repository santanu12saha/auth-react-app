import { gql } from '@apollo/client';

const LOG_OUT = gql`
    mutation {
        logout {
            id
            email
        }
    }
`;

export default LOG_OUT;