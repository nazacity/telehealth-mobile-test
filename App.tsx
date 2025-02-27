import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'translation';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {persistor, store} from 'store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'utils/dayjsUtil';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import Setup from 'navigation/Setup';
import {KeyboardProvider} from 'react-native-keyboard-controller';

enableScreens();

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <KeyboardProvider>
              <Setup />
            </KeyboardProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
