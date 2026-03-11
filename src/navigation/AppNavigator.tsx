import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '../shared/styles/colors';
import {STRINGS} from '../shared/constants/strings';
import RequestsListScreen from '../features/certificate/screens/RequestsListScreen';
import RequestCertificateScreen from '../features/certificate/screens/RequestCertificateScreen';
import RequestDetailsScreen from '../features/certificate/screens/RequestDetailsScreen';
import PdfPreviewScreen from '../features/certificate/screens/PdfPreviewScreen';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RequestsList"
        screenOptions={{
          headerStyle: {backgroundColor: COLORS.headerBackground},
          headerTintColor: COLORS.headerText,
          headerTitleStyle: {fontWeight: '600', fontSize: 17},
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="RequestsList"
          component={RequestsListScreen}
          options={{title: STRINGS.screenTitleRequests}}
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
