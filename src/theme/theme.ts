export interface AppTheme {
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    secondaryLight: string;
    background: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textDisabled: string;
    border: string;
    borderLight: string;
    danger: string;
    dangerLight: string;
    warning: string;
    warningLight: string;
    info: string;
    infoLight: string;
    success: string;
    successLight: string;
    white: string;
    black: string;
    overlay: string;
    statusNew: string;
    statusPending: string;
    statusUnderReview: string;
    statusDone: string;
    headerBackground: string;
    headerText: string;
    fabBackground: string;
    chipText: string;
    statusNewLight: string;
    statusPendingLight: string;
    statusUnderReviewLight: string;
    statusDoneLight: string;
    skeleton: string;
    skeletonHighlight: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
  typography: {
    heading: {fontSize: number; fontWeight: 'bold' | '700' | '600' | '500' | '400'};
    subheading: {fontSize: number; fontWeight: 'bold' | '700' | '600' | '500' | '400'};
    body: {fontSize: number; fontWeight: 'bold' | '700' | '600' | '500' | '400'};
    bodySmall: {fontSize: number; fontWeight: 'bold' | '700' | '600' | '500' | '400'};
    label: {fontSize: number; fontWeight: 'bold' | '700' | '600' | '500' | '400'};
    caption: {fontSize: number; fontWeight: 'bold' | '700' | '600' | '500' | '400'};
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  shadows: {
    sm: {
      shadowColor: string;
      shadowOffset: {width: number; height: number};
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    md: {
      shadowColor: string;
      shadowOffset: {width: number; height: number};
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
    lg: {
      shadowColor: string;
      shadowOffset: {width: number; height: number};
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
  };
}
