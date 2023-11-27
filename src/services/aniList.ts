import { GraphQLClient } from 'graphql-request';
import { ANI_LIST_URL } from '../configs/api';

const aniList = new GraphQLClient(ANI_LIST_URL);

export default aniList;
