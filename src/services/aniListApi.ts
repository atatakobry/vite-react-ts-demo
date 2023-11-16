import { GraphQLClient } from 'graphql-request';

const aniListApi = new GraphQLClient('https://graphql.anilist.co/');

export default aniListApi;
