import React from 'react';
import {View} from 'react-native';
import {useColors} from '../../../../shared/theme';
import PdfViewer from '../../components/PdfViewer';
import {styles} from './styles';

const PdfPreviewScreen: React.FC = () => {
  const colors = useColors();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <PdfViewer />
    </View>
  );
};

export default PdfPreviewScreen;
