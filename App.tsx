import React from 'react';

import { MainApp } from './src/MainApp';
import { LogBox } from 'react-native';

const App = () => {
  return <MainApp />;
};

export default App;
LogBox.ignoreAllLogs();


//eas build -p android --profile preview