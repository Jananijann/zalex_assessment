import React, {useState} from 'react';
import {View, ActivityIndicator, Platform} from 'react-native';
import Pdf from 'react-native-pdf';
import {useColors} from '../../../../theme';
import {styles} from './styles';

const PdfViewer: React.FC = () => {
  const colors = useColors();
  const [loading, setLoading] = useState(true);

  const source =
    Platform.OS === 'ios'
      ? require('../../../../assets/sample_certificate.pdf')
      : {uri: 'bundle-assets://sample_certificate.pdf'};

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {loading && (
        <View style={[styles.loadingOverlay, {backgroundColor: colors.background}]}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      <Pdf
        source={source}
        style={styles.pdf}
        trustAllCerts={false}
        onLoadComplete={() => setLoading(false)}
      />
    </View>
  );
};

export default PdfViewer;
