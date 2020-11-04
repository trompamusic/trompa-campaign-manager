module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules  : {
    'scope-enum': [
      2, 'always', [
        'project',
        'layout',
        'landing-page',
        'search',
        'campaign',
        'startcampaign',
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
