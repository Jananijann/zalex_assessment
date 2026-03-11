import React from 'react';
import {View} from 'react-native';
import PdfViewer from '../../components/PdfViewer';
import {styles} from './styles';

const PdfPreviewScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <PdfViewer />
    </View>
  );
};

export default PdfPreviewScreen;
