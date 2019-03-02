import React, { Component } from 'react';
import '@shopify/polaris/styles.css';
import { AppProvider, Page, Card, Button, Form, FormLayout, Checkbox } from '@shopify/polaris';

class Config extends Component {

  state = {
    checked: false,
    checked2: false,
    checked3: false,
    checked4: false,
    email: '',
  };

  handleSubmit = (event) => {
   alert('form submitted');
  };

  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };

    render() {
        return (
            <AppProvider>
            <Page title="General configuration">
              <Card sectioned>
                <Form onSubmit={this.handleSubmit}>
                  <FormLayout>
                    <Checkbox
                      checked={this.state.checked}
                      onChange={this.handleChange('checked')}
                      label="Automatic upsell" />
                    <Checkbox
                      checked={this.state.checked2}
                      onChange={this.handleChange('checked2')}
                      label="Use customer browse history" />
        
                    <Checkbox
                      checked={this.state.checked3}
                      onChange={this.handleChange('checked3')}
                      label="Use customer purchase history" />
        
                    <Checkbox
                      checked={this.state.checked4}
                      onChange={this.handleChange('checked4')}
                      label="Use customer profile elements (gender, age, location)" />
                    <Button submit>Save</Button>
        
                  </FormLayout>
                </Form>
              </Card>
            </Page>
          </AppProvider>
        );
    }
}
export default Config;



