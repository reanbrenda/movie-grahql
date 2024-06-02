import { getSdk } from "@/generated/graphql";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient('https://harbour-movies.vercel.app/api/graphql')

export const sdk = getSdk(client)