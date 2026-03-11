import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {STRINGS} from '../shared/constants/strings';
import {useTheme, useColors} from '../shared/theme';
import RequestsListScreen from '../features/certificate/screens/RequestsListScreen';
import RequestCertificateScreen from '../features/certificate/screens/RequestCertificateScreen';
import RequestDetailsScreen from '../features/certificate/screens/RequestDetailsScreen';
import PdfPreviewScreen from '../features/certificate/screens/PdfPreviewScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const {isDark, toggleTheme} = useTheme();
  const colors = useColors();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RequestsList"
        screenOptions={{
          headerStyle: {backgroundColor: colors.headerBackground},
          headerTintColor: colors.headerText,
          headerTitleStyle: {fontWeight: '600', fontSize: 17},
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="RequestsList"
          component={RequestsListScreen}
          options={{
            title: STRINGS.screenTitleRequests,
            headerRight: () => (
              <TouchableOpacity
                onPress={toggleTheme}
                accessibilityLabel={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
              >
                <Icon
                  name={isDark ? 'weather-sunny' : 'weather-night'}
                  size={22}
                  color={colors.headerText}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="RequestCertificate"
          component={RequestCertificateScreen}
          options={{title: STRINGS.screenTitleNewRequest}}
        />
        <Stack.Screen
          name="RequestDetails"
          component={RequestDetailsScreen}
          options={{title: STRINGS.screenTitleRequestDetails}}
        />
        <Stack.Screen
          name="PdfPreview"
          component={PdfPreviewScreen}
          options={{title: STRINGS.screenTitlePdfPreview}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
