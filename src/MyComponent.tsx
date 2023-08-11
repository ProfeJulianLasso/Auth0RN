import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAuth0} from 'react-native-auth0';

const MyComponent = () => {
  const {authorize, clearSession, user, getCredentials} = useAuth0();

  const onPressLogIn = async () => {
    try {
      await authorize({}, {});
      const credentials = await getCredentials();
      console.log('AccessToken: ', credentials);
    } catch (e) {
      console.log(e);
    }
  };

  const onPressLogOut = async () => {
    try {
      await clearSession({}, {});
    } catch (e) {
      console.log(e);
    }
  };

  console.log('user', user);
  return (
    <View>
      <Text>App</Text>
      <Button title="LOG IN" onPress={onPressLogIn} />
      <Button title="LOG OUT" onPress={onPressLogOut} />
      {user && <Text>Logged in as {user.name}</Text>}
      {!user && <Text>Not logged in</Text>}
    </View>
  );
};

export default MyComponent;
