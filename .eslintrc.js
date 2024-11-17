module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['modules/core/**/*'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            'paths': ['ui'],
            'patterns': ['ui/*'],
          },
        ],
      },
    },
    {
      files: ['modules/ui/**/*'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            'paths': ['core'],
            'patterns': ['core/*'],
          },
        ],
      },
    },
  ],
};
