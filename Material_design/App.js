import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Login from './screens/Login';

export default function App() {
  return (
   
    <PaperProvider>
    <Login/>

    </PaperProvider>
  );
}


