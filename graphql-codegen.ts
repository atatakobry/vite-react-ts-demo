import { CodegenConfig } from '@graphql-codegen/cli';

import { ANI_LIST_URL } from './src/configs/api';

const config: CodegenConfig = {
  schema: [ANI_LIST_URL],
  documents: ['./src/api/**/*.{ts,tsx}'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
