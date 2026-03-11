declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import {Component} from 'react';
  import {TextProps} from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
    style?: any;
  }

  export default class Icon extends Component<IconProps> {}
}

declare module 'react-native-pdf' {
  import {Component} from 'react';
  import {ViewStyle} from 'react-native';

  interface PdfProps {
    source: any;
    style?: ViewStyle;
    trustAllCerts?: boolean;
    onLoadComplete?: (numberOfPages: number, filePath: string) => void;
    onPageChanged?: (page: number, numberOfPages: number) => void;
    onError?: (error: any) => void;
  }

  export default class Pdf extends Component<PdfProps> {}
}
