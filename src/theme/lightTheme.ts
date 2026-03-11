import {AppTheme} from './theme';

export const lightTheme: AppTheme = {
  colors: {
    primary: '#4F46E5', // indigo-600
    primaryDark: '#3730A3', // indigo-800
    primaryLight: '#EEF2FF', // indigo-50
    secondary: '#6366F1', // indigo-500
    secondaryLight: '#E0E7FF', // indigo-100
    background: '#F8FAFC', // slate-50
    surface: '#FFFFFF',
    textPrimary: '#0F172A', // slate-900
    textSecondary: '#64748B', // slate-500
    textDisabled: '#94A3B8', // slate-400
    border: '#E2E8F0', // slate-200
    borderLight: '#F1F5F9', // slate-100
    danger: '#EF4444', // red-500
    dangerLight: '#FEF2F2', // red-50
    warning: '#F59E0B', // amber-500
    warningLight: '#FFFBEB', // amber-50
    info: '#3B82F6', // blue-500
    infoLight: '#EFF6FF', // blue-50
    success: '#10B981', // emerald-500
    successLight: '#ECFDF5', // emerald-50
    white: '#FFFFFF',
    black: '#000000',
    overlay: 'rgba(0, 0, 0, 0.5)',
    statusNew: '#3B82F6', // blue-500
    statusPending: '#F59E0B', // amber-500
    statusUnderReview: '#8B5CF6', // violet-500
    statusDone: '#10B981', // emerald-500
    headerBackground: '#4F46E5', // indigo-600
    headerText: '#FFFFFF',
    fabBackground: '#4F46E5', // indigo-600
    chipText: '#FFFFFF',
    statusNewLight: '#EFF6FF', // blue-50
    statusPendingLight: '#FFFBEB', // amber-50
    statusUnderReviewLight: '#F5F3FF', // violet-50
    statusDoneLight: '#ECFDF5', // emerald-50
    skeleton: '#E2E8F0', // slate-200
    skeletonHighlight: '#F1F5F9', // slate-100
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
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 2,
    },
    lg: {
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
  },
};
