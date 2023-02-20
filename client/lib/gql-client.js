import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://graphql:5000/",
    cache: new InMemoryCache(),
});

export default client;
