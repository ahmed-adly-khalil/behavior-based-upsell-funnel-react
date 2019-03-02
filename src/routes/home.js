import React, { Component } from 'react';
import '@shopify/polaris/styles.css';
import { AppProvider, Page} from '@shopify/polaris';

class Home extends Component {
    render() {
        return (
            <AppProvider>
                <Page title="Application home page">
                    this section contains a quick how to use the application
      </Page>
            </AppProvider>
        );
    }
}
export default Home;



