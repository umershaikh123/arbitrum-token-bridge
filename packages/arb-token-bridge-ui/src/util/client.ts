import { HttpLink, ApolloClient , InMemoryCache } from "@apollo/client"
 

export const getClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://api.studio.thegraph.com/query/58809/nexus/v0.0.1",
    }),
  });

 
