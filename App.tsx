import React from 'react';
import {Provider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import store from './src/app/store';
import {ThemeProvider} from './src/shared/theme';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
