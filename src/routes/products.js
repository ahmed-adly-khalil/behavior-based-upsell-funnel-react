import React, { Component } from 'react';
import '@shopify/polaris/styles.css';
import { AppProvider, Page ,ResourceList, Card} from '@shopify/polaris';
import gql from "graphql-tag";
import { Query } from "react-apollo";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";


const query = gql`
{
    products(first:100) {
      edges {
        node {
          id
          title
          totalInventory
          onlineStoreUrl
          featuredImage{
            originalSrc
          }
        }
      }
    }
  }
`;

const client = new ApolloClient({
    uri: "https://ahmedteststore2.myshopify.com/admin/api/graphql.json",
    request: async operation => {
        operation.setContext({
            headers: {
                'X-Shopify-Access-Token': 'f62b677707c06b8ab7f9b39c4191c0c9'
            }
        });
    }
});


class Products extends Component {
    render() {
        return (
            
            <AppProvider>
                <Page title="Products">
                <Card sectioned>
                    <ApolloProvider client={client}>
                        <Query query={query} variables={{}}>
                            {({ data, loading }) =>
                                loading ? (
                                    <span>loading data...</span>
                                ) :
  
                                    (
                                        <div>

                                            {
                                                data.products.edges.map((item) => {
                                                    return <li > {item.node.title}</li>
                                                })
                                            }


                                        </div>
                                    )
                            }
                        </Query>
                    </ApolloProvider>
                    </Card>
                </Page>
            </AppProvider>
        );
    }
}
export default Products;