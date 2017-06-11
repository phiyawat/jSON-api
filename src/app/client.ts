import { ApolloClient, createNetworkInterface } from "apollo-client";

const networkInterface = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cj3rfdnynuwyx01133owp02su"
});

const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
