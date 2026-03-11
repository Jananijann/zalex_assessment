import {AppTheme} from './theme';

export const darkTheme: AppTheme = {
  colors: {
    primary: '#818CF8', // indigo-400
    primaryDark: '#4F46E5', // indigo-600
    primaryLight: '#1E1B4B', // indigo-950
    secondary: '#A5B4FC', // indigo-300
    secondaryLight: '#1E1B4B', // indigo-950
    background: '#0F172A', // slate-900
    surface: '#1E293B', // slate-800
    textPrimary: '#F8FAFC', // slate-50
    textSecondary: '#94A3B8', // slate-400
    textDisabled: '#64748B', // slate-500
    border: '#334155', // slate-700
    borderLight: '#1E293B', // slate-800
    danger: '#F87171', // red-400
    dangerLight: '#451A1A',
    warning: '#FBBF24', // amber-400
    warningLight: '#451A03',
    info: '#60A5FA', // blue-400
    infoLight: '#1E3A5F',
    success: '#34D399', // emerald-400
    successLight: '#064E3B',
    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.7)',
    statusNew: '#60A5FA', // blue-400
    statusPending: '#FBBF24', // amber-400
    statusUnderReview: '#A78BFA', // violet-400
    statusDone: '#34D399', // emerald-400
    headerBackground: '#1E293B', // slate-800
    headerText: '#F8FAFC', // slate-50
    fabBackground: '#818CF8', // indigo-400
    chipText: '#FFFFFF',
    statusNewLight: '#1E3A5F',
    statusPendingLight: '#451A03',
    statusUnderReviewLight: '#2E1065',
    statusDoneLight: '#064E3B',
    skeleton: '#334155', // slate-700
    skeletonHighlight: '#475569', // slate-600
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  typography: {
    heading: {fontSize: 20, fontWeight: '700'},
    subheading: {fontSize: 16, fontWeight: '600'},
    body: {fontSize: 14, fontWeight: '400'},
    bodySmall: {fontSize: 12, fontWeight: '400'},
    label: {fontSize: 12, fontWeight: '500'},
    caption: {fontSize: 11, fontWeight: '400'},
  },
  borderRadius: {
    sm: 6,
    md: 10,
    lg: 12,
    xl: 16,
  },
  shadows: {
    sm: {
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
    },
  },
};
