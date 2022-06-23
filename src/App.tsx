import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ModuleOnBoarding from './modules/on-boarding/routes';
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? 'red' : 'white',
  // };

  return (
    <NavigationContainer>
      <ModuleOnBoarding />
    </NavigationContainer>
  );
};

export default App;
