import React, {useState, useEffect, useRef} from 'react';
import {View, ActivityIndicator, Platform, Image} from 'react-native';
import {Text, Button} from 'react-native-paper';
import Pdf from 'react-native-pdf';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useColors} from '../../../../shared/theme';
import {styles} from './styles';
const pdfAsset = require('../../../../assets/sample_certificate.pdf');

function getPdfSource() {
  if (Platform.OS === 'android') {
    return {uri: 'bundle-assets://sample_certificate.pdf'};
  }
  const resolved = Image.resolveAssetSource(pdfAsset);
  return {uri: resolved.uri};
}

const PdfViewer: React.FC = () => {
  const colors = useColors();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfSource, setPdfSource] = useState<any>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      setPdfSource(getPdfSource());
      setError(null);
    } catch {
      setError('Failed to load PDF from assets');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Only set timeout when loading is true
    if (loading) {
      timeoutRef.current = setTimeout(() => {
        setLoading(false);
        setError('PDF loading timed out. Please try again.');
      }, 15000);
    } else {
      // Clear timeout when loading completes
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [loading]);

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

  if (!pdfSource) {
    return (
      <View style={[styles.container, styles.centerContent, {backgroundColor: colors.background}]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, {color: colors.textSecondary}]}>Initializing PDF...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={[styles.pdfContainer, {backgroundColor: colors.surface}]}>
        {loading && (
          <View style={[styles.loadingOverlay, {backgroundColor: colors.background}]}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={[styles.loadingText, {color: colors.textSecondary}]}>Loading PDF...</Text>
          </View>
        )}
        <Pdf
          source={pdfSource}
          style={styles.pdfContent}
          trustAllCerts={false}
          onLoadComplete={() => {
            setLoading(false);
            setError(null);
          }}
          onError={(_err: any) => {
            setLoading(false);
            setError(_err?.message || 'Failed to load PDF document');
          }}
          onPageChanged={(_page: number, _numberOfPages: number) => {
            if (loading) {
              setLoading(false);
            }
          }}
        />
      </View>
    </View>
  );
};

export default PdfViewer;
