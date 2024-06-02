import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
 overwrite: true,
 documents: ["./src/**/*.graphql"],     
 schema: 'https://harbour-movies.vercel.app/api/graphql',
 generates: {
  './src/generated/graphql.ts': {
   plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
   config: {
    rawRequest: true
   },
  },
 },
};

export default config;