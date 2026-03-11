import React from 'react';
import {View, Platform} from 'react-native';
import Pdf from 'react-native-pdf';
import {styles} from './styles';

const PdfViewer: React.FC = () => {
  const source =
    Platform.OS === 'ios'
      ? require('../../../../assets/sample_certificate.pdf')
      : {uri: 'bundle-assets://sample_certificate.pdf'};

  return (
    <View style={styles.container}>
      <Pdf source={source} style={styles.pdf} trustAllCerts={false} />
    </View>
  );
};

export default PdfViewer;
