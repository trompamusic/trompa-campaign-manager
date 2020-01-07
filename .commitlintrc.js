module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules  : {
    'scope-enum': [
      2, 'always', [
        'project',
        'layout',
        'home',
        'redux',
        'sagas',
        'services',
        'i18n',
        'theme',
        'utils',
      ],
    ],
  },
};
