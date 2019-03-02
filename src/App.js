import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@shopify/polaris/styles.css';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';

class App extends Component {
  render() {
    return (
      <AppProvider>
      <Page title="application config">
        <Card sectioned>
          <Button onClick={() => alert('Button clicked! hahahahaha')}>Example button 1111</Button>
        </Card>
      </Page>
    </AppProvider>
    );
  }
}
export default App;

