import React, { Component } from 'react';
import '@shopify/polaris/styles.css';
import { AppProvider, Page } from '@shopify/polaris';

class Help extends Component {
    render() {
        return (
            <AppProvider>
                <Page title="Help">
                    Help Page 
      </Page>
            </AppProvider>
        );
    }
}
export default Help;



