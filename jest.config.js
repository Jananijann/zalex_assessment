module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-community|react-native-paper|react-native-vector-icons|react-native-safe-area-context|@react-navigation|react-native-screens|react-redux|@reduxjs/toolkit|immer|reselect|react-native-config)/)',
  ],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^react-native-config$': '<rootDir>/jest.mock.js',
  },
};
