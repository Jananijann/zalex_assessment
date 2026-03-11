import React, {useState} from 'react';
import {View, ActivityIndicator, Dimensions, Platform} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Pdf from 'react-native-pdf';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useColors} from '../../../../shared/theme';
import {styles} from './styles';

const getSource = () => {
  if (Platform.OS === 'ios') {
    return require('../../../../assets/sample_certificate.pdf');
  }
  return {uri: 'file:///android_asset/sample_certificate.pdf', cache: true};
};

const PdfViewer: React.FC = () => {
  const colors = useColors();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const source = getSource();

  const handleRetry = () => {
    setError(null);
    setLoading(true);
  };

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent, {backgroundColor: colors.background}]}>
        <Icon name="alert-circle-outline" size={48} color={colors.danger} />
        <Text style={[styles.errorText, {color: colors.textPrimary}]}>Failed to load PDF</Text>
        <Text style={[styles.errorMessage, {color: colors.textSecondary}]}>{error}</Text>
        <Button
          mode="outlined"
          onPress={handleRetry}
          style={[styles.retryButton, {borderColor: colors.primary}]}
          textColor={colors.primary}
        >
          Retry
        </Button>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {loading && (
        <View style={[styles.loadingOverlay, {backgroundColor: colors.background}]}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, {color: colors.textSecondary}]}>Loading PDF...</Text>
        </View>
      )}
      <Pdf
        source={source}
        style={{...styles.pdf, width: Dimensions.get('window').width - 32}}
        trustAllCerts={false}
        onLoadComplete={() => setLoading(false)}
        onError={err => {
          setLoading(false);
          setError(err?.message || 'An unknown error occurred');
        }}
      />
    </View>
  );
};

export default PdfViewer;
