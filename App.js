import React from 'react'
import { Text, View } from 'react-native'
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

import { withAuthenticator } from 'aws-amplify-react-native';

class App extends React.Component {
  componentDidMount() {
    console.log('component did mount')
    console.log('Cognito User Session are: ', this.props.authData.signInUserSession)
  }
  render() {
    return (
      <View>
        <Text>Something</Text>
      </View>
    );
  }
}

export default withAuthenticator(App);
