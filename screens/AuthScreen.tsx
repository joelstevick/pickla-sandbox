import { StyleSheet, Button } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useSelector } from 'react-redux'
import { AuthState } from '../store/reducers/auth/auth.reducer';

export default function AuthScreen({ navigation }: RootTabScreenProps<'Auth'>) {
  const loggedIn = useSelector((state: any) => state.auth.loggedIn)
  return (
    <View style={styles.container}>
      <Button onPress={() => { }} title='Login' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
